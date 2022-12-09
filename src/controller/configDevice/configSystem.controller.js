const { request, response } = require("express");
const system = require("../../controller/system.controller");

exports.configSystem = async (req=request, res=response) => {

    let response="";
    const getter = req.get;
    const setter = req.set;

    setter.namedevice &&
    ( system.GetNombreDispositivo({body:setter.namedevice}) );

    setter.timemanagement &&
    ( system.PutTimeManagement({body:setter.timemanagement}) );

    setter.settimemanagementmode &&
    ( system.PutTimeManagementMode({body:setter.settimemanagementmode}) );

    setter.scheduletimer &&
    ( system.PutScheduleTimer({body:setter.scheduletimer}) );

    setter.panelalarmduration &&
    ( system.PutPanelAlarmDuration({body:setter.panelalarmduration}) );

    setter.panelfault &&
    ( system.PutVerificacionFallasPanel({body:setter.panelfault}) );

    setter.setmanagemen &&
    ( system.PutAdministracion({body:setter.setmanagemen}) );

    setter.armoptions &&
    ( system.PutEquipajeOpciones({body:setter.armoptions}) );

    setter.moderegisterdevice &&
    ( system.PutModoRegistroDispositivo({body:setter.moderegisterdevice}) );

    setter.sshsetting &&
    ( system.PutSSHSettings({body:setter.sshsetting}) );

    setter.userlockout &&
    ( system.PutUserLockoutAttemps({body:setter.userlockout}) );

    setter.unlockalluser &&
    ( system.PutAllUserUnlock({body:setter.unlockalluser}) );

    setter.modulelockingsetting &&
    ( system.PutModuleLockingSetting({body:setter.modulelockingsetting}) );

    getter.includes("getdevice") &&
    ( response = {
        ...response,
        device: await system.GetInformacionDispositivo()
    });
 
    getter.includes("getmanagement") &&
    ( response = {
        ...response,
        management: await system.GetAdministracion()
    });

    getter.includes("gettimemanagement") &&
    ( response = {
        ...response,
        timemanagement: await system.GetTimeManagement()
    });

    getter.includes("gettimemanagementmode") &&
    ( response = {
        ...response,
        timemanagementmode: await system.GetTimeManagementMode()
    });

    getter.includes("getscheduletimer") &&
    ( response = {
        ...response,
        scheduletimer: await system.GetScheduleTimer()
    });

    getter.includes("getpanelalarmduration") &&
    ( response = {
        ...response,
        panelalarmduration: await system.GetPanelAlarmDuration()
    });

    getter.includes("getpanelfault") &&
    ( response = {
        ...response,
        panelfault: await system.GetVerificacionFallasPanel()
    });

    getter.includes("getarmoptions") &&
    ( response = {
        ...response,
        armoptions: await system.GetEquipajeOpciones()
    });

    getter.includes("getmoderegisterdevice") &&
    ( response = {
        ...response,
        moderegisterdevice: await system.GetModoRegistroDispositivo()
    });

    getter.includes("getsshsetting") &&
    ( response = {
        ...response,
        sshsetting: await system.GetSSHSettings()
    });

    getter.includes("getuserlockout") &&
    ( response = {
        ...response,
        userlockout: await system.GetUserLockoutAttemps()
    });

    getter.includes("getunlockalluser") &&
    ( response = {
        ...response,
        unlockalluser: await system.GetAllUserlocked()
    });

    getter.includes("getmodulelockingsetting") &&
    ( response = {
        ...response,
        modulelockingsetting: await system.GetModuleLockingSetting()
    });

    console.log("response: ", response);

    return response;
}