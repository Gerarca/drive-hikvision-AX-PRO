const { URLArea, URLPutNameArea } = require("../model/url/area.model");
const petition = require('../Api/isapiConnection');
const { infoDevice } = require('../utils/functions/infoDevice.utils');

  //Get List Area
  exports.GetListArea = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLArea.GetListArea + devices[i].Serial,
          method: 'GET',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetListArea area.controller.js");
    }
  };

  //Set Name Area
  exports.PutNameArea = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){
        const data = await petition({
          infoDevice: devices[i],
          url: URLPutNameArea(req.body.SubSys.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data;
      } 
    } catch (error) {
      console.log("error on GetListArea area.controller.js");
    }
  };

  //Get List Zones
  exports.GetListZones = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){
        const data = await petition({
          infoDevice: devices[i],
          url: URLArea.GetListZones + devices[i].Serial,
          method: 'GET',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetListArea area.controller.js");
    }
  };