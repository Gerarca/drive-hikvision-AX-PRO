const httpClient = require('urllib');

const petition = async ({url, method = "GET", contentype, body}) => { 

    const URL =  process.env.APP_GATEWAY_URL + url;
    const USER = process.env.APP_GATEWAY_USER;
    const PASS = process.env.APP_GATEWAY_PASSWORD;

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
        console.log("Exception: ", Exception);
    } 
}

module.exports = petition;
