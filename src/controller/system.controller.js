const { URLSystem, PutScheduleTimer } = require("../model/url/systems.model");
const ModelSystem = require("../model/xml/system.model");
const peticion = require('../Api/isapiConnection');

  //Systems GET Settings
  exports.GetInformacionDispositivo = async (req, res) => {   
    const data = await peticion({
      url: URLSystem.GetInfoDispositivo,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //Systems PUT Name Device
  exports.GetNombreDispositivo = async (req, res) => { 
    const data = await peticion({
      url: URLSystem.PutNombreDispositivo,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelSystem.cambiarnombre( req.body ),
      formato: 'XML'
    });
 
    res.json(data)   
  };

  //Systems GET Management
  exports.GetAdministracion = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetAdministracion,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //Systems PUT Management
  exports.PutAdministracion = async (req, res) => {   
    const data = await peticion({
      url: URLSystem.PutAdministracion,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Get Time management
  exports.GetTimeManagement = async (req, res) => {
    const data = await peticion({
      url: URLSystem.GetTimeManagement,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'XML'
    });

    res.json(data)
  };

  //Set Time management
  exports.PutTimeManagement = async (req, res) => { 
    const data = await peticion({
      url: URLSystem.PutTimeManagement,
      method: 'PUT',
      contentype: 'json',
      body: ModelSystem.timeManagement(req.body),
      formato: 'XML'
    });

    res.json(data)
  };

  //Get Time management Mode
  exports.GetTimeManagementMode = async (req, res) => {
    const data = await peticion({
      url: URLSystem.GetTimeManagementMode,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'XML'
    });

    res.json(data)
  };
 
  //Put Time management Mode
  exports.PutTimeManagementMode = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.PutTimeManagementMode,
      method: 'PUT',
      contentype: 'json',
      body: ModelSystem.timeManagementMode(req.body),
      formato: 'XML'
    });

    res.json(data)
  };

  //Systems SET DST Management
  exports.PutDSTManagement = async (req, res) => {    
    const data = await peticion({
      url: URLSystem.PutDSTManagement,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data); 
  };

  //Get Schedule Timer
  exports.GetScheduleTimer = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetScheduleTimer,
      method: 'GET',
      contentype: 'json',
      body: {},
    });

    res.json(data); 
  };

  //Systems SET Schedule Timer
  exports.PutScheduleTimer = async (req, res) => {    
    const data = await peticion({
      url: PutScheduleTimer(req.body.SubSysTime.id),
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data); 
  };

  //Get Panel Alarm Duration
  exports.GetPanelAlarmDuration = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetPanelAlarmDuration,
      method: 'GET',
      contentype: 'json',
      body: {},
    });

    res.json(data); 
  };

  //Panel Alarm Duration
  exports.PutPanelAlarmDuration = async (req, res) => {    
    const data = await peticion({
      url: URLSystem.PutPanelAlarmDuration,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
  
    res.json(data); 
  };

  //Systems GET Panel fault Check
  exports.GetVerificacionFallasPanel = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetVerificacionFallasPanel,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data);
  };

  //Systems PUT Panel fault Check
  exports.PutVerificacionFallasPanel = async (req, res) => {   
    const data = await peticion({
      url: URLSystem.PutVerificacionFallasPanel,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Systems GET Arm Options
  exports.GetEquipajeOpciones = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetEquipajeOpciones,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data)
  };

  //Systems PUT Arm Options
  exports.PutEquipajeOpciones = async (req, res) => {   
    const data = await peticion({
      url: URLSystem.PutEquipajeOpciones,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Systems GET Device Enroll Mode
  exports.GetModoRegistroDispositivo = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetModoRegistroDispositivo,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data)
  };

  //Systems PUT Device Enroll Modes
  exports.PutModoRegistroDispositivo = async (req, res) => {    
    const data = await peticion({
      url: URLSystem.PutModoRegistroDispositivo,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);
  };

  //Systems GET SSH Setting
  exports.GetSSHSettings = async (req, res) => { 
    const data = await peticion({
      url: URLSystem.GetSSHSettings,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
 
    res.json(data)
  };
  
  //Systems PUT SSH Setting
  exports.PutSSHSettings = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.PutSSHSettings,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelSystem.sshSetting( req.body ),
      formato: 'XML'
    });
 
    res.json(data)    
  };

  //Systems GET User Lockout Attemps
  exports.GetUserLockoutAttemps = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetUserLockoutAttemps,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data)
  };
  
  //Systems PUT User Lockout Attemps
  exports.PutUserLockoutAttemps = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.PutUserLockoutAttemps,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);    
  };

  //Systems GET UnLock All User 
  exports.GetAllUserlocked = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetAllUserlocked,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data)
  };
  
  //Systems PUT UnLock All User 
  exports.PutAllUserUnlock = async (req, res) => { 
    const data = await peticion({
      url: URLSystem.PutAllUserUnlock,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);      
  };

  //Systems Get Module Locking Setting 
  exports.GetModuleLockingSetting = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.GetModuleLockingSetting,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
 
    res.json(data)
  };

  //Systems PUT UnLock All User 
  exports.PutModuleLockingSetting = async (req, res) => {  
    const data = await peticion({
      url: URLSystem.PutModuleLockingSetting,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
 
    res.json(data);        
  };

