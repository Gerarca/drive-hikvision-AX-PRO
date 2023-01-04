const { URLArea, URLPutNameArea } = require("../model/url/area.model");
const petition = require('../Api/isapiConnection');

  //Get List Area
  exports.GetListArea = async (id) => { 
    const data = await petition({
      url: URLArea.GetListArea + id,
      method: 'GET',
      body: {},
    });
    return data;
  };

  //Set Name Area
  exports.PutNameArea = async (req, id) => { 
    const data = await petition({
      url: URLPutNameArea(req.body.SubSys.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return data;
  };

  //Get List Zones
  exports.GetListZones = async (id) => {  
    const data = await petition({
      url: URLArea.GetListZones + id,
      method: 'GET',
      body: {},
    });
    return data;
  };