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
const { infoDevice } = require('../utils/functions/infoDevice.utils');

  //Get Device Info
  exports.GetDevice = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetDevice + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetDevice device.controller.js");
    }
  };

  //Put Device Info
  exports.PutDevice = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.PutDevice + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: xmlsetdevice(req.body),
          formato: 'xml'
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on PutDevice device.controller.js");
    } 
  };

  //Get Basic Setting Zones
  exports.GetBSZones = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetBSZones + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetBSZones device.controller.js");
    } 
  };

  //Get Basic Setting SubSystems
  exports.GetBSSubSys = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetBSSubSys + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetBSSubSys device.controller.js");
    } 
  };

  //Put Basic Setting SubSystems FALTA POR DECIFRAR EL XML
  exports.PutBSSubSys = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.PutBSSubSys + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: xmlsetdevice(req.body),
          formato: 'xml'
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on PutBSSubSys device.controller.js");
    }
  };
  
  //Get List Zones
  exports.GetZones = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetZones + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetZones device.controller.js");
    }
  };

  //Put Enroll Zone
  exports.EnrolleZone = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrolleZone + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrolleZone device.controller.js");
    }
  };

  //Put Edit One Zones
  exports.SetOneZone = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetOneZone(req.body.Zone.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on URLSetOneZone device.controller.js");
    }
  };

  //Get Detector Setting Zone
  exports.URLGetDetectorSetting = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLGetDetectorSetting(req.params.id) + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on URLGetDetectorSetting device.controller.js");
    }
  };

  //Put Detector Setting Zones
  exports.SetDetectorSetting = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetDetectorSetting(req.body.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on URLSetDetectorSetting device.controller.js");
    }
  };

  //Put Arm Partition Home
  exports.SetArmPartitionHome = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetArmPartitionHome(req.body.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: "",
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetArmPartitionHome device.controller.js");
    }
  };

  //Put Arm Partition Away
  exports.SetArmPartitionAway = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetArmPartitionAway(req.body.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: "",
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetArmPartitionAway device.controller.js");
    }
  };
  
  //Put Disarm Partition 
  exports.SetDisarmPartition = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetDisarmPartition(req.body.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: "",
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetDisarmPartition device.controller.js");
    }
  };

  //Put Clear Alarm 
  exports.SetClearAlarm = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetClearAlarm(req.body.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: "",
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetClearAlarm device.controller.js");
    }
  };

  //Put Control Relay
  exports.SetRelay = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetRelay(req.body.OutputsCtrl.List[0].id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetRelay device.controller.js");
    }
  };

  //Get Estatus Partition
  exports.GetStatusPartition = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetStatusPartition + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetStatusPartition device.controller.js");
    }
  };

  //Get Monitor Alarm
  exports.GetMonitorAlarm = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetMonitorAlarm + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetMonitorAlarm device.controller.js");
    }
  };

  //Get Sounder
  exports.GetSounder = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetSounder + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetSounder device.controller.js");
    }
  };

  //Enroll Sounder
  exports.EnrollSounder = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollSounder + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollSounder device.controller.js");
    }
  };

  //Get KeyPad
  exports.GetKeyPad = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetKeyPad + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetKeyPad device.controller.js");
    }
  };

  //Enroll KeyPad
  exports.EnrollKeyPad = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollKeyPad + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollKeyPad device.controller.js");
    }
  };

  //Get Tag reader
  exports.GetTagReader = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetTagReader + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTagReader device.controller.js");
    }
  };

  //Enroll Tag reader
  exports.EnrollTagReader = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollTagReader + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollTagReader device.controller.js");
    }
  };

  //Get Key Fob
  exports.GetKeyFob = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetKeyFob + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetKeyFob device.controller.js");
    }
  };

  //Enroll Key Fob
  exports.EnrollKeyFob = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollKeyFob + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollKeyFob device.controller.js");
    }
  };

  //Get Tag
  exports.GetTag = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetTag + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTag device.controller.js");
    }
  };

  //Enroll Tag
  exports.Enrolltag = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.Enrolltag + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on Enrolltag device.controller.js");
    }
  };

  //Get Automation
  exports.GetAutomation = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetAutomation + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetAutomation device.controller.js");
    }
  };

  //Enroll Automation
  exports.EnrollAutomation = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollAutomation + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollAutomation device.controller.js");
    }
  };

  //Get Repeater
  exports.GetRepeater = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetRepeater + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetRepeater device.controller.js");
    }
  };

  //Enroll Repeater
  exports.EnrollRepeater = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollRepeater + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollRepeater device.controller.js");
    }
  };

  //Get Transmitter
  exports.GetTransmitter = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.GetTransmitter + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTransmitter device.controller.js");
    }
  };

  //Enroll Transmitter
  exports.EnrollTransmitter = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLDevice.EnrollTransmitter + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on EnrollTransmitter device.controller.js");
    }
  };

