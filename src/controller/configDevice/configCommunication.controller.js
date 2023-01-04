const { request, response } = require("express");
const communication = require("../communication.controller");

exports.configCommunication = async (req = request, id) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.adminAccess &&
    ( communication.PutWiredNetworkAdminAcces({body:setter.adminAccess, id}));

    setter.wlan &&
    ( communication.SetWLAN({body:setter.wlan, id}));

    setter.wireless &&
    ( communication.SetWireless({body:setter.wireless, id}));

    setter.ARC1 &&
    ( communication.SetARC1({body:{ARC:setter.ARC1}, id}));

    setter.ARC2 &&
    ( communication.SetARC2({body:{ARC:setter.ARC2}, id}));

    setter.ivms &&
    ( communication.PutEventTypeNotificationIVMS({body:setter.ivms, id}));

    setter.etnalarm &&
    ( communication.PutETNAlarmReceivingCenter({body:setter.etnalarm, id}));

    setter.etnapp &&
    ( communication.PutETNAPP({body:setter.etnapp, id}));

    setter.couldservice &&
    ( communication.SetCouldService({body:setter.couldservice, id}));

    setter.ftp &&
    ( communication.SetFTP({body:setter.ftp, id}));

    setter.natupnp &&
    ( communication.SetNATUPnp({body:setter.natupnp, id}));
    
    getter.includes("getadminaccess") &&
    ( response = {
        ...response,
        wiredNetworkAdminAcces: await communication.GetWiredNetworkAdminAcces(id)
    });

    getter.includes("getwlan") &&
    ( response = {
        ...response,
        wlan: await communication.GetWLAN(id)
    });

    getter.includes("getwireless") &&
    ( response = {
        ...response,
        wireless: await communication.GetWireless(id)
    });

    getter.includes("getwirelessserver") &&
    ( response = {
        ...response,
        wirelessserver: await communication.GetWirelessServer(id)
    });

    getter.includes("getaccesspointlist") &&
    ( response = {
        ...response,
        accesspointlist: await communication.GetAccessPointList(id)
    });

    getter.includes("getarc") &&
    ( response = {
        ...response,
        arc: await communication.GetAlarmRecivingCenter(id)
    });

    getter.includes("getehomelist") &&
    ( response = {
        ...response,
        ehomelist: await communication.GetEHomeList(id)
    });

    getter.includes("getivms") &&
    ( response = {
        ...response,
        ivms: await communication.GetEventTypeNotificationIVMS(id)
    });

    let array = getter[8].split("/");
    getter.includes(getter[8]) &&
    ( response = {
        ...response,
        etnalarm: await communication.GetETNAlarmReceivingCenter({params:{id:array[1]}, id})
    });

    getter.includes("getetnapp") &&
    ( response = {
        ...response,
        etnapp: await communication.GetETNAPP(id)
    });

    getter.includes("getcoultservice") &&
    ( response = {
        ...response,
        coultservice: await communication.GetCouldService(id)
    });

    getter.includes("getnatupnp") &&
    ( response = {
        ...response,
        natupnp: await communication.GetNATUpnp(id)
    });

    getter.includes("getnatupnpstatus") &&
    ( response = {
        ...response,
        natupnpstatus: await communication.GetNATUPnpStatus(id)
    });

    getter.includes("getnatadminaccess") &&
    ( response = {
        ...response,
        natadminaccess: await communication.GetNATAdminAccess(id)
    });

    getter.includes("getftp") &&
    ( response = {
        ...response,
        ftp: await communication.GetFTP(id)
    });

    console.log("response: ", response);

    return response;
}