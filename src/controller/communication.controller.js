const { URLCommunication, GetETNAlarmReceivingCenterURL, PutETNAlarmReceivingCenterURL } = require("../model/url/communication");
const ModelCommunication= require("../model/xml/communication.model");
const peticion = require('../Api/isapiConnection');
const httpClient = require('urllib');
const { alarmaConfig } = require("../model/config/alarma.model");

  //Get Wired Network Admin Access
  exports.GetWiredNetworkAdminAcces = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.GetWiredNetworkAdminAcces,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
 
    res.json(data)
  };

  //Put Wired Network Admin Access
  exports.PutWiredNetworkAdminAcces = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.PutWiredNetworkAdminAcces,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.WiredNetworkAdminAcces( req.body ),
      formato: 'XML'
    });
 
    res.json(data)
  };

  //Get WLAN
  exports.GetWLAN = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetWLAN,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
 
    res.json(data)
  };

  //Set WLAN
  exports.SetWLAN = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.SetWLAN,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.wlan( req.body ),
      formato: 'XML'
    });
 
    res.json(data)
  };

  //Get Wireless
  exports.GetWireless = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetWireless,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
 
    res.json(data)
  };

  //Get Wireless Server
  exports.GetWirelessServer = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetWirelessServer,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
 
    res.json(data)
  };

  //Get Access Point List
  exports.GetAccessPointList = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetAccessPointList,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
 
    res.json(data)
  };

  //Put Wireless
  exports.SetWireless = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.SetWireless,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.Wireless( req.body ),
      formato: 'XML'
    });
 
    res.json(data) 
  };

  //Get Alarm Reciving Center
  exports.GetAlarmRecivingCenter = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetAlarmRecivingCenter,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data)
  };

  //Set ARC 1
  exports.SetARC1 = async (req, res) => {  
    const data = await peticion({
      url: URLCommunication.SetARC1,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data); 
  };

  //Set ARC 2
  exports.SetARC2 = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.SetARC2,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data)
  };

  //Get E home list
  exports.GetEHomeList = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetEHomeList,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato:"xml"
    });
  
    res.json(data)
  };

  //Get Event Type Notification IVMS-4200
  exports.GetEventTypeNotificationIVMS = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetEventTypeNotificationIVMS,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
  
    res.json(data)
  };

  //Put Event Type Notification IVMS-4200
  exports.PutEventTypeNotificationIVMS = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.PutEventTypeNotificationIVMS,
      method: 'GET',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data)
  };
  
  //Get Event Type Notification Alarm Receiving Center
  exports.GetETNAlarmReceivingCenter = async (req, res) => { 
    const data = await peticion({
      url: GetETNAlarmReceivingCenterURL(req.params.id),
      method: 'GET',
      contentype: 'json',
      body: {},
    });

    res.json(data) 
  };

  //Put Event Type Notification Alarm Receiving Center
  exports.PutETNAlarmReceivingCenter = async (req, res) => {  
    const data = await peticion({
      url: PutETNAlarmReceivingCenterURL(req.body.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data)
  };
    
  //Get Event Type Notification APP
  exports.GetETNAPP = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.GetETNAPP,
      method: 'GET',
      contentype: 'json',
      body: {},
    });

    res.json(data) 
  };

  //Put Event Type Notification APP
  exports.PutETNAPP = async (req, res) => {  
    const data = await peticion({
      url: URLCommunication.PutETNAPP,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data)
  };

  //Get Could Service
  exports.GetCouldService = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.GetCouldService,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
  
    res.json(data)
  };

  //Put Could Service
  exports.SetCouldService = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.SetCouldService,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.CouldService( req.body ),
      formato: 'XML'
    });
  
    res.json(data)
  };

  //Get NAT UPnp
  exports.GetNATUpnp = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.GetNATUpnp,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
  
    res.json(data)
  };

  //Get NAT UPnp Status
  exports.GetNATUPnpStatus = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.GetNATUPnpStatus,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
  
    res.json(data)
  };

  //Get NAT Admin Access
  exports.GetNATAdminAccess = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.GetNATAdminAccess,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
  
    res.json(data)
  };

  //Put NAT UPnp
  exports.SetNATUPnp = async (req, res) => { 
    const data = await peticion({
      url: URLCommunication.SetNATUPnp,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.NATUPnp( req.body ),
      formato: 'XML'
    });
  
    res.json(data)
  };

  //Get FTP
  exports.GetFTP = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.GetFTP,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
  
    res.json(data)
  };

  //Put FTP
  exports.SetFTP = async (req, res) => {   
    const data = await peticion({
      url: URLCommunication.SetFTP,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelCommunication.FTP( req.body ),
      formato: 'XML'
    });
  
    res.json(data);
  };
