const { URLMaintenance, URLSetZone, URLGetDetectorZone, URLSetDetectorZone } = require("../model/url/maintenance.model");
const petition = require('../Api/isapiConnection');

  //GET maintenance Communication Status
  exports.GetCommunicationStatus = async (req, res ) => {
    const data = await petition({
      url: URLMaintenance.GetCommunicationStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET maintenance Batery Status
  exports.GetSBateryStatus = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetSBateryStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Zone Status
  exports.GetZoneStatus = async (req, res ) => {
    const data = await petition({
      url: URLMaintenance.GetZoneStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Sounder Status
  exports.GetSounderStatus = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetSounderStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Automatitation
  exports.GetAutomatitation = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetAutomatitation,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Repeater Status
  exports.GetRepeaterStatus = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetRepeaterStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Tag Reader Status
  exports.GetTagReaderStatus = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetTagReaderStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Key Pad Status
  exports.GetKeyPadStatus = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetKeyPadStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Transmitter Status
  exports.GetTransmitter = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetTransmitter,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Parse Test List
  exports.GetParseTestList = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetParseTestList,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Test 
  exports.GetTest = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetTest,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //SET Test
  exports.SetTest = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.SetTest,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return data;
    //res.json(data);
  };

  //GET Zone
  exports.GetZone = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.GetZone,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //SET Zone
  exports.SetZone = async (req, res ) => { 
    const data = await petition({
      url: URLSetZone(req.params.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //GET Detector Zone
  exports.GetDetectorZone = async (req, res ) => { 
    const data = await petition({
      url: URLGetDetectorZone(req.params.id),
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
    return data;
    //res.json(data);
  };

  //SET Detector Zone
  exports.SetDetectorZone = async (req, res ) => { 
    const data = await petition({
      url: URLSetDetectorZone(req.params.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //GET KeyFob Status
  exports.GetKeyFobStatus = async (req, res ) => { 
    const data = await petition({
      url:URLMaintenance.GetKeyFobStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //GET Maintenance
  exports.GetMaintenance = async (req, res ) => { 
    const data = await petition({
      url:URLMaintenance.GetMaintenance,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //SET Tamper Alarm On HPC Login
  exports.SetTamperAlarmOnHPCLogin = async (req, res ) => { 
    const data = await petition({
      url: URLMaintenance.SetTamperAlarmOnHPCLogin,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };


