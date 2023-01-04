const { URLCommunication, GetETNAlarmReceivingCenterURL, PutETNAlarmReceivingCenterURL } = require("../model/url/communication");
const ModelCommunication= require("../model/xml/communication.model");
const petition = require('../Api/isapiConnection');

  //Get Wired Network Admin Access
  exports.GetWiredNetworkAdminAcces = async (id) => {   
    const data = await petition({
      url: URLCommunication.GetWiredNetworkAdminAcces + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Put Wired Network Admin Access
  exports.PutWiredNetworkAdminAcces = async (req, id) => {  
    const data = await petition({
      url: URLCommunication.PutWiredNetworkAdminAcces + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.WiredNetworkAdminAcces( req.body ),
      formato: 'XML'
    });
 
    return true;
  };

  //Get WLAN
  exports.GetWLAN = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetWLAN + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Set WLAN
  exports.SetWLAN = async (req, id) => { 
    const data = await petition({
      url: URLCommunication.SetWLAN + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.wlan( req.body ),
      formato: 'XML'
    });
    return true;
  };

  //Get Wireless
  exports.GetWireless = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetWireless + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Get Wireless Server
  exports.GetWirelessServer = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetWirelessServer + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Get Access Point List
  exports.GetAccessPointList = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetAccessPointList + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Put Wireless
  exports.SetWireless = async (req, id) => {   
    const data = await petition({
      url: URLCommunication.SetWireless + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.Wireless( req.body ),
      formato: 'XML'
    });
    return data;
  };

  //Get Alarm Reciving Center
  exports.GetAlarmRecivingCenter = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetAlarmRecivingCenter + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Set ARC 1
  exports.SetARC1 = async (req, id) => {  
    const data = await petition({
      url: URLCommunication.SetARC1 + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Set ARC 2
  exports.SetARC2 = async (req, id) => { 
    const data = await petition({
      url: URLCommunication.SetARC2 + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get E home list
  exports.GetEHomeList = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetEHomeList + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato:"xml"
    });
    return data;
  };

  //Get Event Type Notification IVMS-4200
  exports.GetEventTypeNotificationIVMS = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetEventTypeNotificationIVMS + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Event Type Notification IVMS-4200
  exports.PutEventTypeNotificationIVMS = async (req, id) => { 
    const data = await petition({
      url: URLCommunication.PutEventTypeNotificationIVMS + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };
  
  //Get Event Type Notification Alarm Receiving Center
  exports.GetETNAlarmReceivingCenter = async (req, id) => { 
    const data = await petition({
      url: GetETNAlarmReceivingCenterURL(req.params.id) + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Event Type Notification Alarm Receiving Center
  exports.PutETNAlarmReceivingCenter = async (req, id) => {  
    const data = await petition({
      url: PutETNAlarmReceivingCenterURL(req.body.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };
    
  //Get Event Type Notification APP
  exports.GetETNAPP = async (id) => { 
    const data = await petition({
      url: URLCommunication.GetETNAPP + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Put Event Type Notification APP
  exports.PutETNAPP = async (req, id) => {  
    const data = await petition({
      url: URLCommunication.PutETNAPP + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Could Service
  exports.GetCouldService = async (id) => {   
    const data = await petition({
      url: URLCommunication.GetCouldService + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Put Could Service
  exports.SetCouldService = async (req, id) => { 
    const data = await petition({
      url: URLCommunication.SetCouldService + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.CouldService( req.body ),
      formato: 'XML'
    });
    return true;
  };

  //Get NAT UPnp
  exports.GetNATUpnp = async (id) => {   
    const data = await petition({
      url: URLCommunication.GetNATUpnp + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Get NAT UPnp Status
  exports.GetNATUPnpStatus = async (id) => {   
    const data = await petition({
      url: URLCommunication.GetNATUPnpStatus + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Get NAT Admin Access
  exports.GetNATAdminAccess = async (id) => {   
    const data = await petition({
      url: URLCommunication.GetNATAdminAccess + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Put NAT UPnp
  exports.SetNATUPnp = async (req, id) => { 
    const data = await petition({
      url: URLCommunication.SetNATUPnp + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.NATUPnp( req.body ),
      formato: 'XML'
    });
    return true;
  };

  //Get FTP
  exports.GetFTP = async (id) => {   
    const data = await petition({
      url: URLCommunication.GetFTP + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };

  //Put FTP
  exports.SetFTP = async (req, id) => { 
    const data = await petition({
      url: URLCommunication.SetFTP + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.FTP( req.body ),
      formato: 'XML'
    }); 
    return true; 
  };
