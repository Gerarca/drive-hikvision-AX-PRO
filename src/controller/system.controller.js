const { URLSystem, PutScheduleTimer } = require("../model/url/systems.model");
const ModelSystem = require("../model/xml/system.model");
const petition = require('../Api/isapiConnection');

  //Systems GET Settings
  exports.GetInformacionDispositivo = async (id) => {   
    const data = await petition({
      url: URLSystem.GetInfoDispositivo + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Systems PUT Name Device
  exports.GetNombreDispositivo = async (req, id) => { 
    const data = await petition({
      url: URLSystem.PutNombreDispositivo + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelSystem.cambiarnombre( req.body ),
      formato: 'XML'
    }); 
    return true;
  };

  //Systems GET Management
  exports.GetAdministracion = async (id) => {  
    const data = await petition({
      url: URLSystem.GetAdministracion + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Systems PUT Management
  exports.PutAdministracion = async (req, id) => {   
    const data = await petition({
      url: URLSystem.PutAdministracion + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true; 
  };

  //Get Time management
  exports.GetTimeManagement = async (id) => {
    const data = await petition({
      url: URLSystem.GetTimeManagement + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'XML'
    });
    return data;
  };

  //Set Time management
  exports.PutTimeManagement = async (req, id) => { 
    const data = await petition({
      url: URLSystem.PutTimeManagement + id,
      method: 'PUT',
      contentype: 'json',
      body: ModelSystem.timeManagement(req.body),
      formato: 'XML'
    }); 
    return true;
  };

  //Get Time management Mode
  exports.GetTimeManagementMode = async (id) => {
    const data = await petition({
      url: URLSystem.GetTimeManagementMode + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'XML'
    });
    return data;
  };
 
  //Put Time management Mode
  exports.PutTimeManagementMode = async (req, id) => {  
    const data = await petition({
      url: URLSystem.PutTimeManagementMode + id,
      method: 'PUT',
      contentype: 'json',
      body: ModelSystem.timeManagementMode(req.body),
      formato: 'XML'
    }); 
    return true;
  };

  //Systems SET DST Management
  exports.PutDSTManagement = async (req, id) => {    
    const data = await petition({
      url: URLSystem.PutDSTManagement + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    });
    return true;
  };

  //Get Schedule Timer
  exports.GetScheduleTimer = async (id) => {  
    const data = await petition({
      url: URLSystem.GetScheduleTimer + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data; 
  };

  //Systems SET Schedule Timer
  exports.PutScheduleTimer = async (req, id) => {    
    const data = await petition({
      url: PutScheduleTimer(req.body.SubSysTime.id) + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };

  //Get Panel Alarm Duration
  exports.GetPanelAlarmDuration = async (id) => {  
    const data = await petition({
      url: URLSystem.GetPanelAlarmDuration + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Panel Alarm Duration
  exports.PutPanelAlarmDuration = async (req, id) => {    
    const data = await petition({
      url: URLSystem.PutPanelAlarmDuration + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };

  //Systems GET Panel fault Check
  exports.GetVerificacionFallasPanel = async (id) => {  
    const data = await petition({
      url: URLSystem.GetVerificacionFallasPanel + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Systems PUT Panel fault Check
  exports.PutVerificacionFallasPanel = async (req, id) => {   
    const data = await petition({
      url: URLSystem.PutVerificacionFallasPanel + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };

  //Systems GET Arm Options
  exports.GetEquipajeOpciones = async (id) => {  
    const data = await petition({
      url: URLSystem.GetEquipajeOpciones + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Systems PUT Arm Options
  exports.PutEquipajeOpciones = async (req, id) => {   
    const data = await petition({
      url: URLSystem.PutEquipajeOpciones + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };

  //Systems GET Device Enroll Mode
  exports.GetModoRegistroDispositivo = async (id) => {  
    const data = await petition({
      url: URLSystem.GetModoRegistroDispositivo + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Systems PUT Device Enroll Modes
  exports.PutModoRegistroDispositivo = async (req, id) => {    
    const data = await petition({
      url: URLSystem.PutModoRegistroDispositivo + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;
  };

  //Systems GET SSH Setting
  exports.GetSSHSettings = async (id) => { 
    const data = await petition({
      url: URLSystem.GetSSHSettings + id,
      method: 'GET',
      contentype: 'json',
      body: {},
      formato: 'xml'
    });
    return data;
  };
  
  //Systems PUT SSH Setting
  exports.PutSSHSettings = async (req, id) => {  
    const data = await petition({
      url: URLSystem.PutSSHSettings + id,
      method: 'PUT',
      contentype: 'text/plain',
      body: ModelSystem.sshSetting( req.body ),
      formato: 'XML'
    }); 
    return true;    
  };

  //Systems GET User Lockout Attemps
  exports.GetUserLockoutAttemps = async (id) => {  
    const data = await petition({
      url: URLSystem.GetUserLockoutAttemps + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };
  
  //Systems PUT User Lockout Attemps
  exports.PutUserLockoutAttemps = async (req, id) => {  
    const data = await petition({
      url: URLSystem.PutUserLockoutAttemps + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;   
  };

  //Systems GET UnLock All User 
  exports.GetAllUserlocked = async (id) => {  
    const data = await petition({
      url: URLSystem.GetAllUserlocked + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };
  
  //Systems PUT UnLock All User 
  exports.PutAllUserUnlock = async (req, id) => { 
    const data = await petition({
      url: URLSystem.PutAllUserUnlock + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;     
  };

  //Systems Get Module Locking Setting 
  exports.GetModuleLockingSetting = async (id) => {  
    const data = await petition({
      url: URLSystem.GetModuleLockingSetting + id,
      method: 'GET',
      contentype: 'json',
      body: {},
    });
    return data;
  };

  //Systems PUT UnLock All User 
  exports.PutModuleLockingSetting = async (req, id) => {  
    const data = await petition({
      url: URLSystem.PutModuleLockingSetting + id,
      method: 'PUT',
      contentype: 'json',
      body: req.body,
    }); 
    return true;       
  };

