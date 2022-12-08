const { alarmaConfig } = require("../config/alarma.model");

exports.URLCommunication = {
    GetWiredNetworkAdminAcces:      `/ISAPI/Security/adminAccesses?devIndex=`,
    PutWiredNetworkAdminAcces:      `/ISAPI/Security/adminAccesses?devIndex=`,
    GetWiredNetworkInterfaces:      `/ISAPI/System/Network/interfaces/1?format=json&devIndex=`,
    PutWiredNetworkInterfaces:      `/ISAPI/System/Network/interfaces/1/ipAddress?devIndex=`,
    GetWLAN:                        `/ISAPI/System/Network/interfaces/2?devIndex=`,
    SetWLAN:                        `/ISAPI/System/Network/interfaces/2/ipAddress?devIndex=`,
    GetAlarmRecivingCenter:         `/ISAPI/SecurityCP/Configuration/ARC?format=json&devIndex=`,
    GetEHomeList:                   `/ISAPI/System/Network/EhomeList?devIndex=`,
    GetEventTypeNotificationIVMS:   `/ISAPI/SecurityCP/Configuration/messageSendDirect?format=json&devIndex=`,
    PutEventTypeNotificationIVMS:   `/ISAPI/SecurityCP/Configuration/messageSendDirect?format=json&devIndex=`,
    GetETNAPP:                      `/ISAPI/SecurityCP/Configuration/messageSendCloud?format=json&devIndex=`,
    PutETNAPP:                      `/ISAPI/SecurityCP/Configuration/messageSendCloud?format=json&devIndex=`,
    GetCouldService:                `/ISAPI/System/Network/EZVIZ?security=1&iv=662af2c0adbd0889d18a71c81af7d1f5&devIndex=`,
    SetCouldService:                `/ISAPI/System/Network/EZVIZ?security=1&iv=33fa8df09d5a700baedd675f31720be5&devIndex=`,
    GetWireless:                    `/ISAPI/System/Network/interfaces/1/wireless?security=1&iv=1301ee12de35662767cf9a5d15be7ab1&devIndex=`,
    GetWirelessServer:              `/ISAPI/System/Network/interfaces/1/wirelessServer?security=1&iv=8fa4bf78710c8299dbb740654c77d483&devIndex=`,
    GetAccessPointList:             `/ISAPI/System/Network/interfaces/1/wireless/accessPointList?devIndex=`,
    SetWireless:                    `/ISAPI/System/Network/interfaces/1/wireless?security=1&iv=d9c3ceaa8cec51089893fa7ffd816999&devIndex=`,
    SetARC1:                        `/ISAPI/SecurityCP/Configuration/ARC/1?format=json&security=1&iv=b61a623061067dd3eb78c85aa62d3536&devIndex=`,
    SetARC2:                        `/ISAPI/SecurityCP/Configuration/ARC/2?format=json&security=1&iv=2c7f77646626e7677682abc78c057dd2&devIndex=`,
    GetNATUpnp:                     `/ISAPI/System/Network/UPnP?devIndex=`,
    GetNATUPnpStatus:               `/ISAPI/System/Network/UPnP/ports/status?devIndex=`,
    GetNATAdminAccess:              `/ISAPI/Security/adminAccesses?devIndex=`,
    SetNATUPnp:                     `/ISAPI/System/Network/UPnP?devIndex=`,
    GetFTP:                         `/ISAPI/System/Network/ftp?security=1&iv=ad6214164a36007bed172c6c497f2ae4&devIndex=`,
    SetFTP:                         `/ISAPI/System/Network/ftp/1?security=1&iv=9997b1e7aeb0c0f4bfcbd091e4ae499b&devIndex`
};

exports.GetETNAlarmReceivingCenterURL = (id) => ( 
    `/ISAPI/SecurityCP/Configuration/messageSendARC?id=${id}&format=json&devIndex=`
);

exports.PutETNAlarmReceivingCenterURL = (id) => (
    `/ISAPI/SecurityCP/Configuration/messageSendARC?id=${id}&format=json&devIndex=`
);

