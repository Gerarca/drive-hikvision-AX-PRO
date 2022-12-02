exports.URLDevice = {
    GetDevice:                  `/ISAPI/System/deviceInfo?format=json&devIndex=`,
    PutDevice:                  `/ISAPI/System/deviceInfo?devIndex=`,
    GetBSZones:                 `/ISAPI/SecurityCP/Configuration/zones?format=json&devIndex=`,
    GetBSSubSys:                `/ISAPI/SecurityCP/Configuration/subSys?format=json&devIndex=`,
    PutBSSubSys:                `/ISAPI/SecurityCP/Configuration/subSys?format=json&devIndex=`,
    GetZones:                   `/ISAPI/SecurityCP/status/zones?format=json&devIndex=`,
    GetStatusPartition:         `/ISAPI/SecurityCP/status/subSystems?format=json&devIndex=`,
    GetMonitorAlarm:            `/ISAPI/System/AlarmMonitor?format=json&devIndex=`,
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



