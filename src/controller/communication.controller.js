const { URLCommunication, GetETNAlarmReceivingCenterURL, PutETNAlarmReceivingCenterURL } = require("../model/url/communication");
const ModelCommunication= require("../model/xml/communication.model");
const petition = require('../Api/isapiConnection');
const { infoDevice } = require('../utils/functions/infoDevice.utils');

  //Get Wired Network Admin Access
  exports.GetWiredNetworkAdminAcces = async (id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetWiredNetworkAdminAcces + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetWiredNetworkAdminAcces communication.controller.js");
    }
  };

  //Put Wired Network Admin Access
  exports.PutWiredNetworkAdminAcces = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.PutWiredNetworkAdminAcces + devices[i].Serial,
          method: 'PUT',
          contentype: 'text/plain',
          body: ModelCommunication.WiredNetworkAdminAcces( req.body ),
          formato: 'XML'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on PutWiredNetworkAdminAcces communication.controller.js");
    }
  };

  //Get WLAN
  exports.GetWLAN = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetWLAN + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetWLAN communication.controller.js");
    }
  };

  //Set WLAN
  exports.SetWLAN = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetWLAN + devices[i].Serial,
          method: 'PUT',
          contentype: 'text/plain',
          body: ModelCommunication.wlan( req.body ),
          formato: 'XML'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetWLAN communication.controller.js");
    }
  };

  //Get Wireless
  exports.GetWireless = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetWireless + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetWireless communication.controller.js");
    }
  };

  //Get Wireless Server
  exports.GetWirelessServer = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetWirelessServer + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetWirelessServer communication.controller.js");
    }
  };

  //Get Access Point List
  exports.GetAccessPointList = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetAccessPointList + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetAccessPointList communication.controller.js");
    }
  };

  //Put Wireless
  exports.SetWireless = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetWireless + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on SetWireless communication.controller.js");
    }
  };

  //Get Alarm Reciving Center
  exports.GetAlarmRecivingCenter = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetAlarmRecivingCenter + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {}
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetAlarmRecivingCenter communication.controller.js");
    }
  };

  //Set ARC 1
  exports.SetARC1 = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetARC1 + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        });
        return data;
      } 
    } catch (error) {
      console.log("error on SetARC1 communication.controller.js");
    }
  };
    
  //Set ARC 2
  exports.SetARC2 = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetARC2 + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        });
        return data;
      } 
    } catch (error) {
      console.log("error on SetARC2 communication.controller.js");
    }
  };

  //Get E home list
  exports.GetEHomeList = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetEHomeList + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato:"xml"
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetEHomeList communication.controller.js");
    }
  };

  //Get Event Type Notification IVMS-4200
  exports.GetEventTypeNotificationIVMS = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetEventTypeNotificationIVMS + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetEventTypeNotificationIVMS communication.controller.js");
    }
  };

  //Put Event Type Notification IVMS-4200
  exports.PutEventTypeNotificationIVMS = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.PutEventTypeNotificationIVMS + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        });
        return data;
      } 
    } catch (error) {
      console.log("error on PutEventTypeNotificationIVMS communication.controller.js");
    }
  };
  
  //Get Event Type Notification Alarm Receiving Center
  exports.GetETNAlarmReceivingCenter = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: GetETNAlarmReceivingCenterURL(req.params.id) + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetETNAlarmReceivingCenterURL communication.controller.js");
    }
  };

  //Put Event Type Notification Alarm Receiving Center
  exports.PutETNAlarmReceivingCenter = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: PutETNAlarmReceivingCenterURL(req.body.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        });
        return data;
      } 
    } catch (error) {
      console.log("error on PutETNAlarmReceivingCenterURL communication.controller.js");
    }
  };
    
  //Get Event Type Notification APP
  exports.GetETNAPP = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetETNAPP + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetETNAPP communication.controller.js");
    };
  };

  //Put Event Type Notification APP
  exports.PutETNAPP = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.PutETNAPP + id,
          method: 'PUT',
          contentype: 'json',
          body: req.body
        });
        return true;
      } 
    } catch (error) {
      console.log("error on PutETNAPP communication.controller.js");
    }
  };

  //Get Could Service
  exports.GetCouldService = async (id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetCouldService + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetCouldService communication.controller.js");
    };
  };

  //Put Could Service
  exports.SetCouldService = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetCouldService + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on SetCouldService communication.controller.js");
    };
  };

  //Get NAT UPnp
  exports.GetNATUpnp = async (id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetNATUpnp + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetNATUpnp communication.controller.js");
    };
  };

  //Get NAT UPnp Status
  exports.GetNATUPnpStatus = async (id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetNATUPnpStatus + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetNATUPnpStatus communication.controller.js");
    };
  };

  //Get NAT Admin Access
  exports.GetNATAdminAccess = async (id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetNATAdminAccess + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetNATAdminAccess communication.controller.js");
    };
  };

  //Put NAT UPnp
  exports.SetNATUPnp = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetNATUPnp + devices[i].Serial,
          method: 'PUT',
          contentype: 'text/plain',
          body: ModelCommunication.NATUPnp( req.body ),
          formato: 'XML'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on SetNATUPnp communication.controller.js");
    };
  };

  //Get FTP
  exports.GetFTP = async (id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.GetFTP + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetFTP communication.controller.js");
    };
  };

  //Put FTP
  exports.SetFTP = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLCommunication.SetFTP + devices[i].Serial,
          method: 'PUT',
          contentype: 'text/plain',
          body: ModelCommunication.FTP( req.body ),
          formato: 'XML'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on SetFTP communication.controller.js");
    };
  };
