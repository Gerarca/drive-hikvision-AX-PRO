const { URLDashBoard } = require("../model/url/dashBoard.model");
const petition = require('../Api/isapiConnection');
const { infoDevice } = require('../utils/functions/infoDevice.utils');

  //Overwiew Status Alarma
  exports.statusAlarma = async (id) => {
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDashBoard.GetStatusAlarm + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on statusAlarma dashboard.controller.js");
    }
  };

  exports.statusSubSistemas = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDashBoard.GetStatusAlarma + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetStatusAlarma dashboard.controller.js");
    }
  };