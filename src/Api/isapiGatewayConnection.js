const httpClient = require('urllib');

const petition = async ({infoDevice, url, method = "GET", contentype, body}) => { 

    const URL =  "http://"+ infoDevice.DireccionAIPV4 +":"+ infoDevice.PuertoNoSSL + url;
    const USER = infoDevice.user;
    const PASS = infoDevice.password;

    try
    {            
        const options = {
            method: method,
            rejectUnauthorized: false,
            digestAuth: `${USER}:${PASS}`,
            contentType: contentype,
            data: body,
        };

        //console.log("method: ", method);
        //console.log("URL: ", URL);
        //console.log("Body: ", body);
        
        const responseHandler = (err, data, res) => { 
            if (err) {
            console.log("ERROR: ", err);
            }
        }

        const { data } = await httpClient.request(URL, options, responseHandler); 
       
        const result =  data.toString('utf8');

        return result; 

    }
    catch (Exception)
    {
        console.log("Exception on isapiGatewayConnection.js: ", Exception);
    } 
}

module.exports = petition;
