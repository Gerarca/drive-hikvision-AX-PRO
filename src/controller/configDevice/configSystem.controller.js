const { request, response } = require("express");
const system = require("../../controller/system.controller");

exports.configSystem = async (req=request, id) => {

    let response="";
    const getter = req.get;
    const setter = req.set;

    setter.namedevice &&
    ( system.GetNombreDispositivo({body:setter.namedevice, id}) );

    setter.timemanagement &&
    ( system.PutTimeManagement({body:setter.timemanagement, id}) );

    setter.settimemanagementmode &&
    ( system.PutTimeManagementMode({body:setter.settimemanagementmode, id}) );

    setter.scheduletimer &&
    ( system.PutScheduleTimer({body:setter.scheduletimer, id}) );

    setter.panelalarmduration &&
    ( system.PutPanelAlarmDuration({body:setter.panelalarmduration, id}) );

    setter.panelfault &&
    ( system.PutVerificacionFallasPanel({body:setter.panelfault, id}) );

    setter.setmanagemen &&
    ( system.PutAdministracion({body:setter.setmanagemen, id}) );

    setter.armoptions &&
    ( system.PutEquipajeOpciones({body:setter.armoptions, id}) );

    setter.moderegisterdevice &&
    ( system.PutModoRegistroDispositivo({body:setter.moderegisterdevice, id}) );

    setter.sshsetting &&
    ( system.PutSSHSettings({body:setter.sshsetting, id}) );

    setter.userlockout &&
    ( system.PutUserLockoutAttemps({body:setter.userlockout, id}) );

    setter.unlockalluser &&
    ( system.PutAllUserUnlock({body:setter.unlockalluser, id}) );

    setter.modulelockingsetting &&
    ( system.PutModuleLockingSetting({body:setter.modulelockingsetting, id}) );

    getter.includes("getdevice") &&
    ( response = {
        ...response,
        device: await system.GetInformacionDispositivo(id)
    });
 
    getter.includes("getmanagement") &&
    ( response = {
        ...response,
        management: await system.GetAdministracion(id)
    });

    getter.includes("gettimemanagement") &&
    ( response = {
        ...response,
        timemanagement: await system.GetTimeManagement(id)
    });

    getter.includes("gettimemanagementmode") &&
    ( response = {
        ...response,
        timemanagementmode: await system.GetTimeManagementMode(id)
    });

    getter.includes("getscheduletimer") &&
    ( response = {
        ...response,
        scheduletimer: await system.GetScheduleTimer(id)
    });

    getter.includes("getpanelalarmduration") &&
    ( response = {
        ...response,
        panelalarmduration: await system.GetPanelAlarmDuration(id)
    });

    getter.includes("getpanelfault") &&
    ( response = {
        ...response,
        panelfault: await system.GetVerificacionFallasPanel(id)
    });

    getter.includes("getarmoptions") &&
    ( response = {
        ...response,
        armoptions: await system.GetEquipajeOpciones(id)
    });

    getter.includes("getmoderegisterdevice") &&
    ( response = {
        ...response,
        moderegisterdevice: await system.GetModoRegistroDispositivo(id)
    });

    getter.includes("getsshsetting") &&
    ( response = {
        ...response,
        sshsetting: await system.GetSSHSettings(id)
    });

    getter.includes("getuserlockout") &&
    ( response = {
        ...response,
        userlockout: await system.GetUserLockoutAttemps(id)
    });

    getter.includes("getunlockalluser") &&
    ( response = {
        ...response,
        unlockalluser: await system.GetAllUserlocked(id)
    });

    getter.includes("getmodulelockingsetting") &&
    ( response = {
        ...response,
        modulelockingsetting: await system.GetModuleLockingSetting(id)
    });

    console.log("response: ", response);

    return response;
}