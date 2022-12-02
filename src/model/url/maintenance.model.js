exports.URLMaintenance = {
    GetCommunicationStatus:             `/ISAPI/SecurityCP/status/communication?format=json&devIndex=`,
    GetSBateryStatus:                   `/ISAPI/SecurityCP/status/batteries?format=json&devIndex=`,
    GetZoneStatus:                      `/ISAPI/SecurityCP/status/zones?format=json&devIndex=`,
    GetSounderStatus:                   `/ISAPI/SecurityCP/status/exDevStatus?format=json&devIndex=`,
    GetAutomatitation:                  `/ISAPI/SecurityCP/status/exDevStatus?format=json&devIndex=`,
    GetRepeaterStatus:                  `/ISAPI/SecurityCP/status/exDevStatus?format=json&devIndex=`,
    GetTagReaderStatus:                 `/ISAPI/SecurityCP/status/exDevStatus?format=json&devIndex=`,
    GetKeyPadStatus:                    `/ISAPI/SecurityCP/status/exDevStatus?format=json&devIndex=`,
    GetTransmitter:                     `/ISAPI/SecurityCP/status/transmitterStatus?format=json&devIndex=`,
    GetParseTestList:                   `/ISAPI/SecurityCP/paceTest/result?format=json&devIndex=`,
    GetTest:                            `/ISAPI/SecurityCP/paceTest?format=json&devIndex=`,
    SetTest:                            `/ISAPI/SecurityCP/paceTest?format=json&devIndex=`,
    GetZone:                            `/ISAPI/SecurityCP/status/zones?format=json&devIndex=`,
    GetKeyFobStatus:                    `/ISAPI/SecurityCP/status/remoteStatus?format=json&devIndex=`,
    GetMaintenance:                     `/ISAPI/SecurityCP/Configuration/systemManage?format=json&devIndex=`,
    SetTamperAlarmOnHPCLogin:           `/ISAPI/SecurityCP/Configuration/systemManage?format=json&devIndex=`, 
};

exports.URLSetZone = (id = 0) => (
    `/ISAPI/SecurityCP/Configuration/zones/${id}?format=json&devIndex=`
);

exports.URLGetDetectorZone = (id = 0) => (
    `/ISAPI/SecurityCP/Configuration/pircam/zone/${id}?format=json&devIndex=`
)

exports.URLSetDetectorZone = (id = 0) => (
    `/ISAPI/SecurityCP/Configuration/pircam/zone/${id}?format=json&devIndex=`
)