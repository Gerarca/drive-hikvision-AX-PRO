const { URLArea, URLPutNameArea } = require("../model/url/area.model");
const peticion = require('../Api/isapiConnection');

  //Get List Area
  exports.GetListArea = async (req, res) => { 
    const data = await peticion({
      url: URLArea.GetListArea,
      method: 'GET',
      body: {},
    });

    res.json(data);
  };

  //Set Name Area
  exports.PutNameArea = async (req, res) => { 
    const data = await peticion({
      url: URLPutNameArea(req.body.SubSys.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Get List Zones
  exports.GetListZones = async (req, res) => {  
    const data = await peticion({
      url: URLArea.GetListZones,
      method: 'GET',
      body: {},
    });

    res.json(data);
  };