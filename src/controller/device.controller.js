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
  exports.GetDevice = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetDevice,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Put Device Info
  exports.PutDevice = async (req, res) => {   
    const data = await petition({
      url: URLDevice.PutDevice,
      method: 'PUT',
      contentype: 'json',
      body: xmlsetdevice(req.body),
      formato: 'xml'
    });
    return true;
    //res.json(data); 
  };

  //Get Basic Setting Zones
  exports.GetBSZones = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetBSZones,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Get Basic Setting SubSystems
  exports.GetBSSubSys = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetBSSubSys,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Put Basic Setting SubSystems FALTA POR DECIFRAR EL XML
  exports.PutBSSubSys = async (req, res) => {  
    const data = await petition({
      url: URLDevice.PutBSSubSys,
      method: 'PUT',
      contentype: 'json',
      body: xmlsetdevice(req.body),
      formato: 'xml'
    });
    return true;
    //res.json(data);
  };
  
  //Get List Zones
  exports.GetZones = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetZones,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Put Enroll Zone
  exports.EnrolleZone = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrolleZone,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Put Edit One Zones
  exports.SetOneZone = async (req, res) => {  
    const data = await petition({
      url: URLSetOneZone(req.body.Zone.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Detector Setting Zone
  exports.URLGetDetectorSetting = async (req, res) => { 
    const data = await petition({
      url: URLGetDetectorSetting(req.params.id),
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Put Detector Setting Zones
  exports.SetDetectorSetting = async (req, res) => {   
    const data = await petition({
      url: URLSetDetectorSetting(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Put Arm Partition Home
  exports.SetArmPartitionHome = async (req, res) => {  
    const data = await petition({
      url: URLSetArmPartitionHome(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    }); 
    return true;
    //res.json(data);
  };

  //Put Arm Partition Away
  exports.SetArmPartitionAway = async (req, res) => {   
    const data = await petition({
      url: URLSetArmPartitionAway(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
    return true;
    //res.json(data);
  };
  
  //Put Disarm Partition 
  exports.SetDisarmPartition = async (req, res) => {  
    const data = await petition({
      url: URLSetDisarmPartition(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
    return true;
    //res.json(data);
  };

  //Put Clear Alarm 
  exports.SetClearAlarm = async (req, res) => {  
    const data = await petition({
      url: URLSetClearAlarm(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
    return true;
    //res.json(data);
  };

  //Put Control Relay
  exports.SetRelay = async (req, res) => {  
    const data = await petition({
      url: URLSetRelay(req.body.OutputsCtrl.List[0].id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
    //res.json(data);
  };

  //Get Estatus Partition
  exports.GetStatusPartition = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetStatusPartition,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Get Monitor Alarm
  exports.GetMonitorAlarm = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetMonitorAlarm,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Get Sounder
  exports.GetSounder = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetSounder,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll Sounder
  exports.EnrollSounder = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollSounder,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get KeyPad
  exports.GetKeyPad = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetKeyPad,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll KeyPad
  exports.EnrollKeyPad = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollKeyPad,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Tag reader
  exports.GetTagReader = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetTagReader,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll Tag reader
  exports.EnrollTagReader = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollTagReader,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Key Fob
  exports.GetKeyFob = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetKeyFob,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll Key Fob
  exports.EnrollKeyFob = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollKeyFob,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Tag
  exports.GetTag = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetTag,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll Tag
  exports.Enrolltag = async (req, res) => {  
    const data = await petition({
      url: URLDevice.Enrolltag,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Automation
  exports.GetAutomation = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetAutomation,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll Automation
  exports.EnrollAutomation = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollAutomation,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Repeater
  exports.GetRepeater = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetRepeater,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    //res.json(data);
  };

  //Enroll Repeater
  exports.EnrollRepeater = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollRepeater,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

  //Get Transmitter
  exports.GetTransmitter = async (req, res) => { 
    const data = await petition({
      url: URLDevice.GetTransmitter,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
    res.json(data);
  };

  //Enroll Transmitter
  exports.EnrollTransmitter = async (req, res) => {  
    const data = await petition({
      url: URLDevice.EnrollTransmitter,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
    //res.json(data);
  };

