const { request, response } = require("express");
const communication = require("../communication.controller");

exports.configCommunication = async (req = request, device) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.adminAccess &&
    ( communication.PutWiredNetworkAdminAcces({body:setter.adminAccess, device}));

    setter.wlan &&
    ( communication.SetWLAN({body:setter.wlan, device}));

    setter.wireless &&
    ( communication.SetWireless({body:setter.wireless, device}));

    setter.ARC1 &&
    ( communication.SetARC1({body:{ARC:setter.ARC1}, device}));

    setter.ARC2 &&
    ( communication.SetARC2({body:{ARC:setter.ARC2}, device}));

    setter.ivms &&
    ( communication.PutEventTypeNotificationIVMS({body:setter.ivms, device}));

    setter.etnalarm &&
    ( communication.PutETNAlarmReceivingCenter({body:setter.etnalarm, device}));

    setter.etnapp &&
    ( communication.PutETNAPP({body:setter.etnapp, device}));

    setter.couldservice &&
    ( communication.SetCouldService({body:setter.couldservice, device}));

    setter.ftp &&
    ( communication.SetFTP({body:setter.ftp, device}));

    setter.natupnp &&
    ( communication.SetNATUPnp({body:setter.natupnp, device}));
    
    getter.includes("getadminaccess") &&
    ( response = {
        ...response,
        wiredNetworkAdminAcces: await communication.GetWiredNetworkAdminAcces(device)
    });

    getter.includes("getwlan") &&
    ( response = {
        ...response,
        wlan: await communication.GetWLAN(device)
    });

    getter.includes("getwireless") &&
    ( response = {
        ...response,
        wireless: await communication.GetWireless(device)
    });

    getter.includes("getwirelessserver") &&
    ( response = {
        ...response,
        wirelessserver: await communication.GetWirelessServer(device)
    });

    getter.includes("getaccesspointlist") &&
    ( response = {
        ...response,
        accesspointlist: await communication.GetAccessPointList(device)
    });

    getter.includes("getarc") &&
    ( response = {
        ...response,
        arc: await communication.GetAlarmRecivingCenter(device)
    });

    getter.includes("getehomelist") &&
    ( response = {
        ...response,
        ehomelist: await communication.GetEHomeList(device)
    });

    getter.includes("getivms") &&
    ( response = {
        ...response,
        ivms: await communication.GetEventTypeNotificationIVMS(device)
    });

    let array = getter[8].split("/");
    getter.includes(getter[8]) &&
    ( response = {
        ...response,
        etnalarm: await communication.GetETNAlarmReceivingCenter({params:{id:array[1]}, device})
    });

    getter.includes("getetnapp") &&
    ( response = {
        ...response,
        etnapp: await communication.GetETNAPP(device)
    });

    getter.includes("getcoultservice") &&
    ( response = {
        ...response,
        coultservice: await communication.GetCouldService(device)
    });

    getter.includes("getnatupnp") &&
    ( response = {
        ...response,
        natupnp: await communication.GetNATUpnp(device)
    });

    getter.includes("getnatupnpstatus") &&
    ( response = {
        ...response,
        natupnpstatus: await communication.GetNATUPnpStatus(device)
    });

    getter.includes("getnatadminaccess") &&
    ( response = {
        ...response,
        natadminaccess: await communication.GetNATAdminAccess(device)
    });

    getter.includes("getftp") &&
    ( response = {
        ...response,
        ftp: await communication.GetFTP(device)
    });

    console.log("response: ", response);

    return response;
}