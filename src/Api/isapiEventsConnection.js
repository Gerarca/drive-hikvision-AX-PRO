const DigestFetch = require("digest-fetch");
const httpClient = require("urllib");
const { eventsApiRestSimulador } = require("./eventsSimulador");

exports.peticionEvents = async ({ url, method = "GET", body }) => {
  const URL = process.env.API_URL + url + process.env.DISPOSITIVOID;
  const USER = process.env.USER;
  const PASS = process.env.PASSWORD;
  const httpEventReceiver = process.env.NETSOCS_EVENT_RECEIVER_HTTP_URL;
  const client = new DigestFetch(USER, PASS);

  let cadena =          "";
  let eventosObjects =  "";
  let codigo =          "";
  let dateE =            "";
  let URLEvent =        "";

  try {
    var options = {
      method: method,
      body: body,
      Headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await client
      .fetch(URL, options)
      .then((response) => response.body)
      .then((res) =>
        res.on("readable", () => {
          let chunk;

          while (null !== (chunk = res.read())) {
            cadena = chunk.toString("utf8");
            eventosObjects = extraerIDEvent(cadena);
            console.log("Objeto Eventos: ", eventosObjects);
            
            codigo =  eventosObjects? 
                        eventosObjects.EventNotificationAlert ? 
                            eventosObjects.EventNotificationAlert.CIDAlarm ?
                                 eventosObjects.EventNotificationAlert.CIDAlarm.CIDCode 
                            :eventosObjects.EventNotificationAlert.VideoReview?
                                11033
                            :undefined 
                        :undefined 
                      :undefined;

            console.log("codigo: ", codigo);

            URLEvent = eventsApiRestSimulador(codigo);
            console.log("URLEvent: ", URLEvent); 

            dateE =  eventosObjects? 
                        eventosObjects.EventNotificationAlert ? 
                            eventosObjects.EventNotificationAlert.CIDAlarm ? 
                                eventosObjects.EventNotificationAlert.CIDAlarm.triggerTime 
                                :eventosObjects.EventNotificationAlert.VideoReview? 
                                    eventosObjects.EventNotificationAlert.VideoReview.HikCIDParams.triggerTime 
                                :undefined 
                        :undefined 
                    :undefined;
            let date = new Date(dateE);
            console.log("date: ", date);          

            if( URLEvent !== undefined ){
                fetch(httpEventReceiver + URLEvent, {
                    method: 'POST', 
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "deviceId": 101,
                        "eventDate": date.getUTCFullYear() +"-"+ date.getMonth() +"-"+ date.getDay(),
                        "eventTime": date.getHours()  
                    }) 
                }).then( res => console.log(res.text()));   
            }                              
          }
        })
      )
      .catch((err) => console.log(err));

    return {
      statuscode: 200,
      statusString: "linting",
    };
  } catch (Exception) {
    console.log("Exception: ", Exception);
  }
};

exports.DeleteSubscribeEvents = async ({
  url,
  method = "DEL",
  contentype,
  body,
}) => {
  const URL = process.env.API_URL + url;
  const USER = process.env.USER;
  const PASS = process.env.PASSWORD;

  try {
    const options = {
      method: method,
      rejectUnauthorized: false,
      digestAuth: `${USER}:${PASS}`,
      contentType: contentype,
      data: "",
    };

    //console.log("method: ", method);
    //console.log("URL: ", URL);
    //console.log("Body: ", body);

    const responseHandler = (err, data, res) => {
      if (err) {
        console.log("ERROR: ", err);
      }
    };

    const { data } = await httpClient.request(URL, options, responseHandler);

    return {
      ok: true,
    };
  } catch (Exception) {
    console.log("Exception: ", Exception);
  }
};

const extraerIDEvent = (cadena) => {

  let eventArray = cadena.split(/[\n][\n|\r]?[\n]/);
  let result = eventArray.map( (item) => item.replace(/(\r\n|\n|\r)/gm, "" ));
  //console.log("Array Notification: ", eventArray[6] );

  try {
    let json = result.at(-1) ? JSON.parse(result.at(-1)) : JSON.parse(result.at(-2));
    //console.log("Objeto Notification: ", JSON.stringify( json) );
    return JSON.parse(JSON.stringify(json));
  } catch (error) {
    console.log(error);
  }

};
