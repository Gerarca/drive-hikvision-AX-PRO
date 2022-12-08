const { URLArea, URLPutNameArea } = require("../model/url/area.model");
const petition = require('../Api/isapiConnection');

  //Get List Area
  exports.GetListArea = async (req, res) => { 
    const data = await petition({
      url: URLArea.GetListArea,
      method: 'GET',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Set Name Area
  exports.PutNameArea = async (req, res) => { 
    const data = await petition({
      url: URLPutNameArea(req.body.SubSys.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return data;
    //res.json(data);
  };

  //Get List Zones
  exports.GetListZones = async (req, res) => {  
    const data = await petition({
      url: URLArea.GetListZones,
      method: 'GET',
      body: {},
    });
    return data;
    //res.json(data);
  };