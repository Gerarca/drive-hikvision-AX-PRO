const { URLSystem, PutScheduleTimer } = require("../model/url/systems.model");
const ModelSystem = require("../model/xml/system.model");
const petition = require('../Api/isapiConnection');
const { infoDevice } = require('../utils/functions/infoDevice.utils');

  //Systems GET Settings
  exports.GetInformacionDispositivo = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetInfoDispositivo + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        }); 
        return data; 
      } 
    } catch (error) {
      console.log("error on GetInformacionDispositivo system.controller.js");
    }
  };

  //Systems PUT Name Device
  exports.GetNombreDispositivo = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutNombreDispositivo + devices[i].Serial,
          method: 'PUT',
          contentype: 'text/plain',
          body: ModelSystem.cambiarnombre( req.body ),
          formato: 'XML'
        }); 
        return true; 
      } 
    } catch (error) {
      console.log("error on GetNombreDispositivo system.controller.js");
    }
  };

  //Systems GET Management
  exports.GetAdministracion = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetAdministracion + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data; 
      } 
    } catch (error) {
      console.log("error on GetAdministracion system.controller.js");
    }
  };

  //Systems PUT Management
  exports.PutAdministracion = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutAdministracion + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;  
      } 
    } catch (error) {
      console.log("error on PutAdministracion system.controller.js");
    } 
  };

  //Get Time management
  exports.GetTimeManagement = async (id) => {
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetTimeManagement + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'XML'
        });
        return data;;  
      } 
    } catch (error) {
      console.log("error on GetTimeManagement system.controller.js");
    } 
  };

  //Set Time management
  exports.PutTimeManagement = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutTimeManagement + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: ModelSystem.timeManagement(req.body),
          formato: 'XML'
        }); 
        return true;  
      } 
    } catch (error) {
      console.log("error on PutTimeManagement system.controller.js");
    } 
  };

  //Get Time management Mode
  exports.GetTimeManagementMode = async (id) => {
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetTimeManagementMode + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'XML'
        });
        return data; 
      } 
    } catch (error) {
      console.log("error on GetTimeManagementMode system.controller.js");
    } 
  };
 
  //Put Time management Mode
  exports.PutTimeManagementMode = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutTimeManagementMode + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: ModelSystem.timeManagementMode(req.body),
          formato: 'XML'
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutTimeManagementMode system.controller.js");
    }  
  };

  //Systems SET DST Management
  exports.PutDSTManagement = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutDSTManagement + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutDSTManagement system.controller.js");
    }   
  };

  //Get Schedule Timer
  exports.GetScheduleTimer = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetScheduleTimer + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetScheduleTimer system.controller.js");
    }  
  };

  //Systems SET Schedule Timer
  exports.PutScheduleTimer = async (req, id) => {    
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: PutScheduleTimer(req.body.SubSysTime.id) + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;;
      } 
    } catch (error) {
      console.log("error on PutScheduleTimer system.controller.js");
    } 
  };

  //Get Panel Alarm Duration
  exports.GetPanelAlarmDuration = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetPanelAlarmDuration + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetPanelAlarmDuration system.controller.js");
    } 
  };

  //Panel Alarm Duration
  exports.PutPanelAlarmDuration = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutPanelAlarmDuration + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutPanelAlarmDuration system.controller.js");
    } 
  };

  //Systems GET Panel fault Check
  exports.GetVerificacionFallasPanel = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetVerificacionFallasPanel + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetVerificacionFallasPanel system.controller.js");
    } 
  };

  //Systems PUT Panel fault Check
  exports.PutVerificacionFallasPanel = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutVerificacionFallasPanel + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutVerificacionFallasPanel system.controller.js");
    } 
  };

  //Systems GET Arm Options
  exports.GetEquipajeOpciones = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetEquipajeOpciones + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;;
      } 
    } catch (error) {
      console.log("error on GetEquipajeOpciones system.controller.js");
    } 
  };

  //Systems PUT Arm Options
  exports.PutEquipajeOpciones = async (req, id) => {   
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutEquipajeOpciones + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutEquipajeOpciones system.controller.js");
    } 
  };

  //Systems GET Device Enroll Mode
  exports.GetModoRegistroDispositivo = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetModoRegistroDispositivo + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetModoRegistroDispositivo system.controller.js");
    } 
  };

  //Systems PUT Device Enroll Modes
  exports.PutModoRegistroDispositivo = async (req, id) => {    
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutModoRegistroDispositivo + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutModoRegistroDispositivo system.controller.js");
    } 
  };

  //Systems GET SSH Setting
  exports.GetSSHSettings = async (id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetSSHSettings + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
          formato: 'xml'
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetSSHSettings system.controller.js");
    } 
  };
  
  //Systems PUT SSH Setting
  exports.PutSSHSettings = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutSSHSettings + devices[i].Serial,
          method: 'PUT',
          contentype: 'text/plain',
          body: ModelSystem.sshSetting( req.body ),
          formato: 'XML'
        }); 
        return true;
      } 
    } catch (error) {
      console.log("error on PutSSHSettings system.controller.js");
    }    
  };

  //Systems GET User Lockout Attemps
  exports.GetUserLockoutAttemps = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetUserLockoutAttemps + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetUserLockoutAttemps system.controller.js");
    }    
  };
  
  //Systems PUT User Lockout Attemps
  exports.PutUserLockoutAttemps = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutUserLockoutAttemps + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true
      } 
    } catch (error) {
      console.log("error on PutUserLockoutAttemps system.controller.js");
    }    
  };

  //Systems GET UnLock All User 
  exports.GetAllUserlocked = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetAllUserlocked + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetAllUserlocked system.controller.js");
    } 
  };
  
  //Systems PUT UnLock All User 
  exports.PutAllUserUnlock = async (req, id) => { 
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutAllUserUnlock + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true; 
      } 
    } catch (error) {
      console.log("error on PutAllUserUnlock system.controller.js");
    }      
  };

  //Systems Get Module Locking Setting 
  exports.GetModuleLockingSetting = async (id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.GetModuleLockingSetting + devices[i].Serial,
          method: 'GET',
          contentype: 'json',
          body: {},
        });
        return data;
      } 
    } catch (error) {
      console.log("error on GetModuleLockingSetting system.controller.js");
    }  
  };

  //Systems PUT UnLock All User 
  exports.PutModuleLockingSetting = async (req, id) => {  
    try {
      const devices =  await infoDevice();
      for( i=0; i<devices.length; i++ ){ 
        const data = await petition({
          infoDevice: devices[i],
          url: URLSystem.PutModuleLockingSetting + devices[i].Serial,
          method: 'PUT',
          contentype: 'json',
          body: req.body,
        }); 
        return true; 
      } 
    } catch (error) {
      console.log("error on PutModuleLockingSetting system.controller.js");
    }        
  };

