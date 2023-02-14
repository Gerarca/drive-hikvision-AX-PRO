const petition = require('../Api/isapiGatewayConnection');
const { URLGateway } = require("../model/url/gateway.model");
const { infoDevice } = require('../utils/functions/infoDevice.utils');

  exports.GetListAlarms = async (device) => {    
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){
        const data = await petition({
          infoDevice: devices[i],
          url: URLGateway.getListAlarms,
          method: 'POST',
          body: JSON.stringify({
            "SearchDescription": 
            {
                "position": 0,
                "maxResult": 100
            }
          }),
        });
        return JSON.parse(data);
      }
    } catch (error) {
      console.log("error on GetListAlarms gateway.controller.js");
    } 
  };

