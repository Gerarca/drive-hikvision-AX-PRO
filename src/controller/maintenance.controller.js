const { URLMaintenance, URLSetZone, URLGetDetectorZone, URLSetDetectorZone } = require("../model/url/maintenance.model");
const peticion = require('../Api/isapiConnection');

  //GET maintenance Communication Status
  exports.GetCommunicationStatus = async (req, res = response) => {
    const data = await peticion({
      url: URLMaintenance.GetCommunicationStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //GET maintenance Batery Status
  exports.GetSBateryStatus = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetSBateryStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //GET Zone Status
  exports.GetZoneStatus = async (req, res = response) => {
    const data = await peticion({
      url: URLMaintenance.GetZoneStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //GET Sounder Status
  exports.GetSounderStatus = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetSounderStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //GET Automatitation
  exports.GetAutomatitation = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetAutomatitation,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //GET Repeater Status
  exports.GetRepeaterStatus = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetRepeaterStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //GET Tag Reader Status
  exports.GetTagReaderStatus = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetTagReaderStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //GET Key Pad Status
  exports.GetKeyPadStatus = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetKeyPadStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //GET Transmitter Status
  exports.GetTransmitter = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetTransmitter,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //GET Parse Test List
  exports.GetParseTestList = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetParseTestList,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //GET Test 
  exports.GetTest = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetTest,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //SET Test
  exports.SetTest = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.SetTest,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //GET Zone
  exports.GetZone = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.GetZone,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data);
  };

  //SET Zone
  exports.SetZone = async (req, res = response) => { 
    const data = await peticion({
      url: URLSetZone(req.params.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //GET Detector Zone
  exports.GetDetectorZone = async (req, res = response) => { 
    const data = await peticion({
      url: URLGetDetectorZone(req.params.id),
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //SET Detector Zone
  exports.SetDetectorZone = async (req, res = response) => { 
    const data = await peticion({
      url: URLSetDetectorZone(req.params.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //GET KeyFob Status
  exports.GetKeyFobStatus = async (req, res = response) => { 
    const data = await peticion({
      url:URLMaintenance.GetKeyFobStatus,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //GET Maintenance
  exports.GetMaintenance = async (req, res = response) => { 
    const data = await peticion({
      url:URLMaintenance.GetMaintenance,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //SET Tamper Alarm On HPC Login
  exports.SetTamperAlarmOnHPCLogin = async (req, res = response) => { 
    const data = await peticion({
      url: URLMaintenance.SetTamperAlarmOnHPCLogin,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };


