exports.URLDevice = {
    GetDevice:                  `/ISAPI/System/deviceInfo?format=json&devIndex=`,
    PutDevice:                  `/ISAPI/System/deviceInfo?devIndex=`,
    GetBSZones:                 `/ISAPI/SecurityCP/Configuration/zones?format=json&devIndex=`,
    GetZones:                   `/ISAPI/SecurityCP/status/zones?format=json&devIndex=`,
    EnrolleZone:                `/ISAPI/SecurityCP/Configuration/zones/mode?format=json&devIndex=`,
    GetStatusPartition:         `/ISAPI/SecurityCP/status/subSystems?format=json&devIndex=`,
    GetMonitorAlarm:            `/ISAPI/System/AlarmMonitor?format=json&devIndex=`,
    GetSounder:                 `/ISAPI/SecurityCP/Configuration/wirelessSiren?format=json&devIndex=`,
    EnrollSounder:              `/ISAPI/SecurityCP/Configuration/wirelessSiren/mode?format=json&devIndex=`,
    GetKeyPad:                  `/ISAPI/SecurityCP/Configuration/keypad?format=json&devIndex=`,
    EnrollKeyPad:               `/ISAPI/SecurityCP/Configuration/keypad/mode?format=json&devIndex=`,
    GetTagReader:               `/ISAPI/SecurityCP/Configuration/cardReader?format=json&devIndex=`,
    EnrollTagReader:            `/ISAPI/SecurityCP/Configuration/cardReader/mode?format=json&devIndex=`,
    GetKeyFob:                  `/ISAPI/SecurityCP/Configuration/remoteCtrl?format=json&devIndex=`,
    EnrollKeyFob:               `/ISAPI/SecurityCP/Configuration/remoteCtrl/mode?format=json&devIndex=`,
    GetTag:                     `/ISAPI/SecurityCP/Configuration/card?format=json&devIndex=`,
    Enrolltag:                  `/ISAPI/SecurityCP/Configuration/card/mode?format=json&devIndex`,
    GetAutomation:              `/ISAPI/SecurityCP/Configuration/outputs?format=json&devIndex=`,
    EnrollAutomation:           `/ISAPI/SecurityCP/Configuration/outputModules/mode?format=json&devIndex=`,
    GetRepeater:                `/ISAPI/SecurityCP/Configuration/repeaters?format=json&devIndex=`,
    EnrollRepeater:             `/ISAPI/SecurityCP/Configuration/repeaters/mode?format=json&devIndex=`,
    GetTransmitter:             `/ISAPI/SecurityCP/Configuration/transmitter/paramCfgList?format=json&devIndex=`,
    EnrollTransmitter:          `/ISAPI/SecurityCP/Configuration/transmitter/mode?format=json&devIndex=`,
};

exports.URLSetOneZone = (id) => (
    `/ISAPI/SecurityCP/Configuration/zones/${id}?format=json&devIndex=`
);

exports.URLGetDetectorSetting = (id) => (
    `/ISAPI/SecurityCP/Configuration/pircam/zone/${id}?format=json&devIndex=`
);

exports.URLSetDetectorSetting = (id) => (
    `/ISAPI/SecurityCP/Configuration/pircam/zone/${id}?format=json&devIndex=`
);

exports.URLSetArmPartitionHome = (id) => (
    `/ISAPI/SecurityCP/control/arm/${id}?ways=stay&format=json&devIndex=`
);

exports.URLSetArmPartitionAway = (id) => (
    `/ISAPI/SecurityCP/control/arm/${id}?ways=away&format=json&devIndex=`
);

exports.URLSetDisarmPartition = (id) => (
    `/ISAPI/SecurityCP/control/disarm/${id}?format=json&devIndex=`
);

exports.URLSetClearAlarm = (id) => (
    `/ISAPI/SecurityCP/control/clearAlarm/${id}?format=json&devIndex=`
);

exports.URLSetRelay = (id) => (
    `/ISAPI/SecurityCP/control/outputs/${id}?format=json&devIndex=`
);



