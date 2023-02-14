const { URLMaintenance, URLSetZone, URLGetDetectorZone, URLSetDetectorZone } = require("../model/url/maintenance.model");
const petition = require('../Api/isapiConnection');
const { infoDevice } = require('../utils/functions/infoDevice.utils')

  //GET maintenance Communication Status
  exports.GetCommunicationStatus = async (id) => {
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetCommunicationStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetCommunicationStatus maintenance.controller.js");
    }
  };

  //GET maintenance Batery Status
  exports.GetSBateryStatus = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetSBateryStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetSBateryStatus maintenance.controller.js");
    }
  };

  //GET Zone Status
  exports.GetZoneStatus = async (id) => {
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetZoneStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetZoneStatus maintenance.controller.js");
    }
  };

  //GET Sounder Status
  exports.GetSounderStatus = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetSounderStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetSounderStatus maintenance.controller.js");
    }
  };

  //GET Automatitation
  exports.GetAutomatitation = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetAutomatitation + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetAutomatitation maintenance.controller.js");
    }
  };

  //GET Repeater Status
  exports.GetRepeaterStatus = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetRepeaterStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetRepeaterStatus maintenance.controller.js");
    }
  };

  //GET Tag Reader Status
  exports.GetTagReaderStatus = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetTagReaderStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTagReaderStatus maintenance.controller.js");
    }
  };

  //GET Key Pad Status
  exports.GetKeyPadStatus = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetKeyPadStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetKeyPadStatus maintenance.controller.js");
    }
  };

  //GET Transmitter Status
  exports.GetTransmitter = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetTransmitter + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTransmitter maintenance.controller.js");
    }
  };

  //GET Parse Test List
  exports.GetParseTestList = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetParseTestList + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetParseTestList maintenance.controller.js");
    }
  };

  //GET Test 
  exports.GetTest = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetTest + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTest maintenance.controller.js");
    }
  };

  //SET Test
  exports.SetTest = async (req, id ) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.SetTest + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetTest maintenance.controller.js");
    }
  };

  //GET Zone
  exports.GetZone = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.GetZone + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetZone maintenance.controller.js");
    }
  };

  //SET Zone
  exports.SetZone = async (req, id ) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetZone(req.params.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetZone maintenance.controller.js");
    }
  };

  //GET Detector Zone
  exports.GetDetectorZone = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLGetDetectorZone(req.params.id) + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetDetectorZone maintenance.controller.js");
    }
  };

  //SET Detector Zone
  exports.SetDetectorZone = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSetDetectorZone(req.params.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.bod
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on URLSetDetectorZone maintenance.controller.js");
    }
  };

  //GET KeyFob Status
  exports.GetKeyFobStatus = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url:URLMaintenance.GetKeyFobStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetKeyFobStatus maintenance.controller.js");
    }
  };

  //GET Maintenance
  exports.GetMaintenance = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url:URLMaintenance.GetMaintenance + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetMaintenance maintenance.controller.js");
    }
  };

  //SET Tamper Alarm On HPC Login
  exports.SetTamperAlarmOnHPCLogin = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLMaintenance.SetTamperAlarmOnHPCLogin + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on SetTamperAlarmOnHPCLogin maintenance.controller.js");
    }
  };


