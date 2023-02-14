const { request, response } = require("express");
const system = require("../../controller/system.controller");

exports.configSystem = async (req=request, device) => {

    let response="";
    const getter = req.get;
    const setter = req.set;

    setter.namedevice &&
    ( system.GetNombreDispositivo({body:setter.namedevice, device}) );

    setter.timemanagement &&
    ( system.PutTimeManagement({body:setter.timemanagement, device}) );

    setter.settimemanagementmode &&
    ( system.PutTimeManagementMode({body:setter.settimemanagementmode, device}) );

    setter.scheduletimer &&
    ( system.PutScheduleTimer({body:setter.scheduletimer, device}) );

    setter.panelalarmduration &&
    ( system.PutPanelAlarmDuration({body:setter.panelalarmduration, device}) );

    setter.panelfault &&
    ( system.PutVerificacionFallasPanel({body:setter.panelfault, device}) );

    setter.setmanagemen &&
    ( system.PutAdministracion({body:setter.setmanagemen, device}) );

    setter.armoptions &&
    ( system.PutEquipajeOpciones({body:setter.armoptions, device}) );

    setter.moderegisterdevice &&
    ( system.PutModoRegistroDispositivo({body:setter.moderegisterdevice, device}) );

    setter.sshsetting &&
    ( system.PutSSHSettings({body:setter.sshsetting, device}) );

    setter.userlockout &&
    ( system.PutUserLockoutAttemps({body:setter.userlockout, device}) );

    setter.unlockalluser &&
    ( system.PutAllUserUnlock({body:setter.unlockalluser, device}) );

    setter.modulelockingsetting &&
    ( system.PutModuleLockingSetting({body:setter.modulelockingsetting, device}) );

    getter.includes("getdevice") &&
    ( response = {
        ...response,
        device: await system.GetInformacionDispositivo(device)
    });
 
    getter.includes("getmanagement") &&
    ( response = {
        ...response,
        management: await system.GetAdministracion(device)
    });

    getter.includes("gettimemanagement") &&
    ( response = {
        ...response,
        timemanagement: await system.GetTimeManagement(device)
    });

    getter.includes("gettimemanagementmode") &&
    ( response = {
        ...response,
        timemanagementmode: await system.GetTimeManagementMode(device)
    });

    getter.includes("getscheduletimer") &&
    ( response = {
        ...response,
        scheduletimer: await system.GetScheduleTimer(device)
    });

    getter.includes("getpanelalarmduration") &&
    ( response = {
        ...response,
        panelalarmduration: await system.GetPanelAlarmDuration(device)
    });

    getter.includes("getpanelfault") &&
    ( response = {
        ...response,
        panelfault: await system.GetVerificacionFallasPanel(device)
    });

    getter.includes("getarmoptions") &&
    ( response = {
        ...response,
        armoptions: await system.GetEquipajeOpciones(device)
    });

    getter.includes("getmoderegisterdevice") &&
    ( response = {
        ...response,
        moderegisterdevice: await system.GetModoRegistroDispositivo(device)
    });

    getter.includes("getsshsetting") &&
    ( response = {
        ...response,
        sshsetting: await system.GetSSHSettings(device)
    });

    getter.includes("getuserlockout") &&
    ( response = {
        ...response,
        userlockout: await system.GetUserLockoutAttemps(device)
    });

    getter.includes("getunlockalluser") &&
    ( response = {
        ...response,
        unlockalluser: await system.GetAllUserlocked(device)
    });

    getter.includes("getmodulelockingsetting") &&
    ( response = {
        ...response,
        modulelockingsetting: await system.GetModuleLockingSetting(device)
    });

    console.log("response: ", response);

    return response;
}