const { URLEvents, URLDeleteSubscribeEvents } = require("../model/url/events.model");
const { peticionEvents } = require('../Api/isapiEventsConnection');
const { DeleteSubscribeEvents } = require('../Api/isapiEventsConnection');

  //Get Subscribe Events
  exports.GetEvents = async (req, id) => {  

    //Borra la subcripcion de los eventos
    const dataDel = await DeleteSubscribeEvents({
      url: URLDeleteSubscribeEvents(id),
      method: 'DELETE',
      contentype: 'json',
      body: "",
    });

    //Subcribe Receiver Events
    const data = await peticionEvents({
      url: URLEvents.GetEvents + id,
      method: 'POST',
      body: JSON.stringify(req.body),
    });

    return data;
  };

  //Delete Subscribe Events
  exports.DelSubscribeEvents = async (id) => { 
    const data = await DeleteSubscribeEvents({
      url: URLDeleteSubscribeEvents(id),
      method: 'DELETE',
      contentype: 'json',
      body: "",
    });
    return data;
  };