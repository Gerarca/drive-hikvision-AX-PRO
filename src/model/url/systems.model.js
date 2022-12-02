exports.URLSystem = {
    GetInfoDispositivo:                 `/ISAPI/System/deviceInfo?format=json&devIndex=`,
    PutNombreDispositivo:               `/ISAPI/System/deviceInfo?&devIndex=`,
    GetAdministracion:                  `/ISAPI/SecurityCP/Configuration/systemManage?format=json&devIndex=`,
    PutAdministracion:                  `/ISAPI/SecurityCP/Configuration/systemManage?format=json&devIndex=`,
    GetVerificacionFallasPanel:         `/ISAPI/SecurityCP/Configuration/faultCheckCfg?format=json&devIndex=`,
    PutVerificacionFallasPanel:         `/ISAPI/SecurityCP/Configuration/faultCheckCfg?format=json&devIndex=`,
    GetEquipajeOpciones:                `/ISAPI/SecurityCP/Configuration/advanceCfg?format=json&devIndex=`,
    PutEquipajeOpciones:                `/ISAPI/SecurityCP/Configuration/advanceCfg?format=json&devIndex=`,
    GetModoRegistroDispositivo:         `/ISAPI/SecurityCP/Configuration/registerMode?format=json&devIndex=`,
    PutModoRegistroDispositivo:         `/ISAPI/SecurityCP/Configuration/registerMode?format=json&devIndex=`,
    GetSSHSettings:                     `/ISAPI/System/Network/ssh?devIndex=`,     
    PutSSHSettings:                     `/ISAPI/System/Network/ssh?devIndex=`,
    GetUserLockoutAttemps:              `/ISAPI/System/userLock/config?format=json&devIndex=`,
    PutUserLockoutAttemps:              `/ISAPI/System/userLock/config?format=json&devIndex=`,
    GetAllUserlocked:                   `/ISAPI/System/userLock/lockedUsers?format=json&devIndex=`,
    PutAllUserUnlock:                   `/ISAPI/System/userLock/unlockUser?format=json&devIndex=`,
    GetModuleLockingSetting:            `/ISAPI/System/moduleLock/config?format=json&devIndex=`,
    PutModuleLockingSetting:            `/ISAPI/System/moduleLock/config?format=json&devIndex=`,
    GetTimeManagement:                  `/ISAPI/System/time?devIndex=`,
    PutTimeManagement:                  `/ISAPI/System/time?devIndex=`,
    GetTimeManagementMode:              `/ISAPI/System/time/ntpServers/1?devIndex=`,
    PutTimeManagementMode:              `/ISAPI/System/time/ntpServers/1?devIndex=`,
    PutDSTManagement:                   `/ISAPI/System/time/timeZone?devIndex=`,
    GetScheduleTimer:                   `/ISAPI/SecurityCP/Configuration/subSysTime?format=json&devIndex=`,
    GetPanelAlarmDuration:              `/ISAPI/SecurityCP/Configuration/deviceTime?format=json&devIndex=`,
    PutPanelAlarmDuration:              `/ISAPI/SecurityCP/Configuration/deviceTime?format=json&devIndex=`,
};

exports.PutScheduleTimer = (id) => (
    `/ISAPI/SecurityCP/Configuration/subSysTime/${id}?format=json&devIndex=`
);

