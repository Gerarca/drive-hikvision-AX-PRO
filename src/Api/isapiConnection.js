const httpClient = require('urllib');
var convert = require('xml-js');

const peticion = async ({url, method = "GET", contentype, body, formato = 'JSON' }) => { 

    const URL =  process.env.APP_GATEWAY_URL + url;
    const USER = process.env.APP_GATEWAY_USER;
    const PASS = process.env.APP_GATEWAY_PASSWORD;

    if( formato === 'JSON' ){
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
            const result =  JSON.parse( data.toString('utf8') );
    
            return {
                ok: true,
                res: result,
            }; 
    
        }
        catch (Exception)
        {
            console.log("Exception JSON: ", Exception);
        } 
    }else{ 
        //XML
        try{
            const options = {
                method: method,
                rejectUnauthorized: false,
                digestAuth: `${USER}:${PASS}`,
                contentType: 'text/plain',
                data: body
            };
              
            const responseHandler = (err, data, res) => { 
                if (err) {
                    console.log("ERROR: ", err);
                    }
            }
            //console.log("Body: ", body);     
            const { data } = await httpClient.request(URL, options, responseHandler);
            const xml = data.toString('utf8'); 
            var result = convert.xml2json(xml, { compact: true, spaces: 4 });
            
            return {
                ok: true,
                res: result,
            };
        }
        catch (Exception)
        {
            console.log("Exception XML: ", Exception);
        }   
    }
}

module.exports = peticion;
