const { URLEvents, URLDeleteSubscribeEvents } = require("../model/url/events.model");
const { peticionEvents } = require('../Api/isapiEventsConnection');
const { DeleteSubscribeEvents } = require('../Api/isapiEventsConnection');
const peticion = require('../Api/isapiConnection');

  //Get Subscribe Events
  exports.GetEvents = async (req, res) => {  

    //Borra la subcripcion de los eventos
    const dataDel = await DeleteSubscribeEvents({
      url: URLDeleteSubscribeEvents(process.env.DISPOSITIVOID),
      method: 'DELETE',
      contentype: 'json',
      body: "",
    });

    //Subcribe Receiver Events
    const data = await peticionEvents({
      url: URLEvents.GetEvents,
      method: 'POST',
      body: JSON.stringify(req.body),
    });

    res.json(data);
  };

  //Delete Subscribe Events
  exports.DelSubscribeEvents = async (req, res) => { 
    const data = await DeleteSubscribeEvents({
      url: URLDeleteSubscribeEvents(process.env.DISPOSITIVOID),
      method: 'DELETE',
      contentype: 'json',
      body: "",
    });
 
    res.json(data);
  };