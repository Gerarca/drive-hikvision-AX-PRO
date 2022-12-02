const WebSocket = require('ws');

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
const peticion = require('../Api/isapiConnection');
const httpClient = require('urllib');
const { xmlsetdevice } = require('../model/xml/device.model');

  //Get Device Info
  exports.GetDevice = async (req, res) => { 
    const data = await peticion({
      url: URLDevice.GetDevice,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //Put Device Info
  exports.PutDevice = async (req, res) => {   
    const data = await peticion({
      url: URLDevice.PutDevice,
      method: 'PUT',
      contentype: 'json',
      body: xmlsetdevice(req.body),
      formato: 'xml'
    });
 
    res.json(data); 
  };

  //Get Basic Setting Zones
  exports.GetBSZones = async (req, res) => { 
    const data = await peticion({
      url: URLDevice.GetBSZones,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Get Basic Setting SubSystems
  exports.GetBSSubSys = async (req, res) => { 
    const data = await peticion({
      url: URLDevice.GetBSSubSys,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Put Basic Setting SubSystems FALTA POR DECIFRAR EL XML
  exports.PutBSSubSys = async (req, res) => {  
    const data = await peticion({
      url: URLDevice.PutBSSubSys,
      method: 'PUT',
      contentype: 'json',
      body: xmlsetdevice(req.body),
      formato: 'xml'
    });
 
    res.json(data);
  };
  
  //Get List Zones
  exports.GetZones = async (req, res) => { 
    const data = await peticion({
      url: URLDevice.GetZones,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Put Edit One Zones
  exports.SetOneZone = async (req, res) => {  
    const data = await peticion({
      url: URLSetOneZone(req.params.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Get Detector Setting Zone
  exports.URLGetDetectorSetting = async (req, res) => { 
    const data = await peticion({
      url: URLGetDetectorSetting(req.params.id),
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Put Detector Setting Zones
  exports.SetDetectorSetting = async (req, res) => {   
    const data = await peticion({
      url: URLSetDetectorSetting(req.params.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Put Arm Partition Home
  exports.SetArmPartitionHome = async (req, res) => {   
    const data = await peticion({
      url: URLSetArmPartitionHome(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
  
    res.json(data);
  };

  //Put Arm Partition Away
  exports.SetArmPartitionAway = async (req, res) => {   
    const data = await peticion({
      url: URLSetArmPartitionAway(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
  
    res.json(data);
  };
  
  //Put Disarm Partition 
  exports.SetDisarmPartition = async (req, res) => {  
    const data = await peticion({
      url: URLSetDisarmPartition(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
  
    res.json(data);
  };

  //Put Clear Alarm 
  exports.SetClearAlarm = async (req, res) => {  
    const data = await peticion({
      url: URLSetClearAlarm(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: "",
    });
  
    res.json(data);
  };

  //Put Control Relay
  exports.SetRelay = async (req, res) => {  
    const data = await peticion({
      url: URLSetRelay(req.body.OutputsCtrl.List[0].id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data);
  };

  //Get Estatus Partition
  exports.GetStatusPartition = async (req, res) => { 
    const data = await peticion({
      url: URLDevice.GetStatusPartition,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //Get Monitor Alarm
  exports.GetMonitorAlarm = async (req, res) => { 
    const data = await peticion({
      url: URLDevice.GetMonitorAlarm,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

