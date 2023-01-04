const { URLDevice, 
        URLSetOneZone, 
        URLSetDetectorSetting,
        URLGetDetectorSetting,
        URLSetArmPartitionHome,
        URLSetArmPartitionAway,
        URLSetDisarmPartition,
        URLSetClearAlarm,
        URLSetRelay  
      } = require("../model/url/device.model");
const petition = require('../Api/isapiConnection');
const { xmlsetdevice } = require('../model/xml/device.model');

  //Get Device Info
  exports.GetDevice = async (id) => { 
    const data = await petition({
      url: URLDevice.GetDevice + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Device Info
  exports.PutDevice = async (req, id) => {   
    const data = await petition({
      url: URLDevice.PutDevice + id,
      method: 'PUT',
      contentype: 'json',
      body: xmlsetdevice(req.body),
      formato: 'xml'
    });
    return true; 
  };

  //Get Basic Setting Zones
  exports.GetBSZones = async (id) => { 
    const data = await petition({
      url: URLDevice.GetBSZones + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Get Basic Setting SubSystems
  exports.GetBSSubSys = async (id) => { 
    const data = await petition({
      url: URLDevice.GetBSSubSys + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Basic Setting SubSystems FALTA POR DECIFRAR EL XML
  exports.PutBSSubSys = async (req, id) => {  
    const data = await petition({
      url: URLDevice.PutBSSubSys + id,
      method: 'PUT',
      contentype: 'json',
      body: xmlsetdevice(req.body),
      formato: 'xml'
    });
    return true;
  };
  
  //Get List Zones
  exports.GetZones = async (id) => { 
    const data = await petition({
      url: URLDevice.GetZones + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Enroll Zone
  exports.EnrolleZone = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrolleZone + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Put Edit One Zones
  exports.SetOneZone = async (req, id) => {  
    const data = await petition({
      url: URLSetOneZone(req.body.Zone.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Detector Setting Zone
  exports.URLGetDetectorSetting = async (req, id) => { 
    const data = await petition({
      url: URLGetDetectorSetting(req.params.id) + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Detector Setting Zones
  exports.SetDetectorSetting = async (req, id) => {   
    const data = await petition({
      url: URLSetDetectorSetting(req.body.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Put Arm Partition Home
  exports.SetArmPartitionHome = async (req, id) => {  
    const data = await petition({
      url: URLSetArmPartitionHome(req.body.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: "",
    }); 
    return true;
  };

  //Put Arm Partition Away
  exports.SetArmPartitionAway = async (req, id) => {   
    const data = await petition({
      url: URLSetArmPartitionAway(req.body.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
    return true;
  };
  
  //Put Disarm Partition 
  exports.SetDisarmPartition = async (req, id) => {  
    const data = await petition({
      url: URLSetDisarmPartition(req.body.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
  };

  //Put Clear Alarm 
  exports.SetClearAlarm = async (req, id) => {  
    const data = await petition({
      url: URLSetClearAlarm(req.body.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
    return true;
  };

  //Put Control Relay
  exports.SetRelay = async (req, id) => {  
    const data = await petition({
      url: URLSetRelay(req.body.OutputsCtrl.List[0].id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };

  //Get Estatus Partition
  exports.GetStatusPartition = async (id) => { 
    const data = await petition({
      url: URLDevice.GetStatusPartition + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Get Monitor Alarm
  exports.GetMonitorAlarm = async (id) => { 
    const data = await petition({
      url: URLDevice.GetMonitorAlarm + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Get Sounder
  exports.GetSounder = async (id) => { 
    const data = await petition({
      url: URLDevice.GetSounder + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Sounder
  exports.EnrollSounder = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollSounder + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get KeyPad
  exports.GetKeyPad = async (id) => { 
    const data = await petition({
      url: URLDevice.GetKeyPad + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll KeyPad
  exports.EnrollKeyPad = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollKeyPad + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Tag reader
  exports.GetTagReader = async (id) => { 
    const data = await petition({
      url: URLDevice.GetTagReader + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Tag reader
  exports.EnrollTagReader = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollTagReader + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Key Fob
  exports.GetKeyFob = async (id) => { 
    const data = await petition({
      url: URLDevice.GetKeyFob + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Key Fob
  exports.EnrollKeyFob = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollKeyFob + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Tag
  exports.GetTag = async (id) => { 
    const data = await petition({
      url: URLDevice.GetTag + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Tag
  exports.Enrolltag = async (req, id) => {  
    const data = await petition({
      url: URLDevice.Enrolltag + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Automation
  exports.GetAutomation = async (id) => { 
    const data = await petition({
      url: URLDevice.GetAutomation + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Automation
  exports.EnrollAutomation = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollAutomation + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Repeater
  exports.GetRepeater = async (id) => { 
    const data = await petition({
      url: URLDevice.GetRepeater + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Repeater
  exports.EnrollRepeater = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollRepeater + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Transmitter
  exports.GetTransmitter = async (id) => { 
    const data = await petition({
      url: URLDevice.GetTransmitter + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Enroll Transmitter
  exports.EnrollTransmitter = async (req, id) => {  
    const data = await petition({
      url: URLDevice.EnrollTransmitter + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

