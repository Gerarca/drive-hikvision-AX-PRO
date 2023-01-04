const { URLMaintenance, URLSetZone, URLGetDetectorZone, URLSetDetectorZone } = require("../model/url/maintenance.model");
const petition = require('../Api/isapiConnection');

  //GET maintenance Communication Status
  exports.GetCommunicationStatus = async (id) => {
    const data = await petition({
      url: URLMaintenance.GetCommunicationStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET maintenance Batery Status
  exports.GetSBateryStatus = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetSBateryStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Zone Status
  exports.GetZoneStatus = async (id) => {
    const data = await petition({
      url: URLMaintenance.GetZoneStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Sounder Status
  exports.GetSounderStatus = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetSounderStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Automatitation
  exports.GetAutomatitation = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetAutomatitation + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Repeater Status
  exports.GetRepeaterStatus = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetRepeaterStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Tag Reader Status
  exports.GetTagReaderStatus = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetTagReaderStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Key Pad Status
  exports.GetKeyPadStatus = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetKeyPadStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Transmitter Status
  exports.GetTransmitter = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetTransmitter + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Parse Test List
  exports.GetParseTestList = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetParseTestList + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Test 
  exports.GetTest = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetTest + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //SET Test
  exports.SetTest = async (req, id ) => { 
    const data = await petition({
      url: URLMaintenance.SetTest + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return data;
  };

  //GET Zone
  exports.GetZone = async (id) => { 
    const data = await petition({
      url: URLMaintenance.GetZone + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //SET Zone
  exports.SetZone = async (req, id ) => { 
    const data = await petition({
      url: URLSetZone(req.params.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //GET Detector Zone
  exports.GetDetectorZone = async (req, id) => { 
    const data = await petition({
      url: URLGetDetectorZone(req.params.id) + id,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
    return data;
  };

  //SET Detector Zone
  exports.SetDetectorZone = async (req, id) => { 
    const data = await petition({
      url: URLSetDetectorZone(req.params.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //GET KeyFob Status
  exports.GetKeyFobStatus = async (id) => { 
    const data = await petition({
      url:URLMaintenance.GetKeyFobStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //GET Maintenance
  exports.GetMaintenance = async (id) => { 
    const data = await petition({
      url:URLMaintenance.GetMaintenance + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //SET Tamper Alarm On HPC Login
  exports.SetTamperAlarmOnHPCLogin = async (req, id) => { 
    const data = await petition({
      url: URLMaintenance.SetTamperAlarmOnHPCLogin + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };


