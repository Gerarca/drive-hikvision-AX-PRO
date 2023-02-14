const { URLEvents, URLDeleteSubscribeEvents } = require("../model/url/events.model");
const { peticionEvents } = require('../Api/isapiEventsConnection');
const { DeleteSubscribeEvents } = require('../Api/isapiEventsConnection');
const { infoDevice } = require('../utils/functions/infoDevice.utils');


  //Get Subscribe Events
  exports.GetEvents = async (req, id) => {  
    try { 
      const devices =  await infoDevice(); 
      for( i=0; i<devices.length; i++ ){ 

        //Borra la subcripcion de los eventos
        const dataDel = await DeleteSubscribeEvents({
          infoDevice: devices[i],
          url: URLDeleteSubscribeEvents(devices[i].Serial),
          method: 'DELETE',
          contentype: 'json',
          body: "",
        });

        //Subcribe Receiver Events
        const data = await peticionEvents({
          infoDevice: devices[i],
          url: URLEvents.GetEvents + devices[i].Serial,
          method: 'POST',
          body: JSON.stringify({
            "SubscribeDeviceMgmt":{
              "eventMode":"all",
              "defenceMode":"all"
            }
          }),
        });

        return data;
      } 
    } catch (error) {
      console.log("error on GetEvents event.controller.js");
    } 
  };

  //Delete Subscribe Events
  exports.DelSubscribeEvents = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await DeleteSubscribeEvents({
          infoDevice: devices[i],
          url: URLDeleteSubscribeEvents(devices[i].Serial),
          method: 'DELETE',
          contentype: 'json',
          body: "",
        });
        return data; 
      } 
    } catch (error) {
      console.log("error on DelSubscribeEvents event.controller.js");
    }
  };