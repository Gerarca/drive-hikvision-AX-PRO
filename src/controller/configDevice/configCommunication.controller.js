const { request, response } = require("express");
const communication = require("../communication.controller");

exports.configCommunication = async (req = request, res = response) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.adminAccess &&
    ( communication.PutWiredNetworkAdminAcces({body:setter.adminAccess}));

    setter.wlan &&
    ( communication.SetWLAN({body:setter.wlan}));

    setter.wireless &&
    ( communication.SetWireless({body:setter.wireless}));

    setter.ARC1 &&
    ( communication.SetARC1({body:{ARC:setter.ARC1}}));

    setter.ARC2 &&
    ( communication.SetARC2({body:{ARC:setter.ARC2}}));

    setter.ivms &&
    ( communication.PutEventTypeNotificationIVMS({body:setter.ivms}));

    setter.etnalarm &&
    ( communication.PutETNAlarmReceivingCenter({body:setter.etnalarm}));

    setter.etnapp &&
    ( communication.PutETNAPP({body:setter.etnapp}));

    setter.couldservice &&
    ( communication.SetCouldService({body:setter.couldservice}));

    setter.ftp &&
    ( communication.SetFTP({body:setter.ftp}));

    setter.natupnp &&
    ( communication.SetNATUPnp({body:setter.natupnp}));
    
    getter.includes("getadminaccess") &&
    ( response = {
        ...response,
        wiredNetworkAdminAcces: await communication.GetWiredNetworkAdminAcces()
    });

    getter.includes("getwlan") &&
    ( response = {
        ...response,
        wlan: await communication.GetWLAN()
    });

    getter.includes("getwireless") &&
    ( response = {
        ...response,
        wireless: await communication.GetWireless()
    });

    getter.includes("getwirelessserver") &&
    ( response = {
        ...response,
        wirelessserver: await communication.GetWirelessServer()
    });

    getter.includes("getaccesspointlist") &&
    ( response = {
        ...response,
        accesspointlist: await communication.GetAccessPointList()
    });

    getter.includes("getarc") &&
    ( response = {
        ...response,
        arc: await communication.GetAlarmRecivingCenter()
    });

    getter.includes("getehomelist") &&
    ( response = {
        ...response,
        ehomelist: await communication.GetEHomeList()
    });

    getter.includes("getivms") &&
    ( response = {
        ...response,
        ivms: await communication.GetEventTypeNotificationIVMS()
    });

    let array = getter[8].split("/");
    getter.includes(getter[8]) &&
    ( response = {
        ...response,
        etnalarm: await communication.GetETNAlarmReceivingCenter({params:{id:array[1]}})
    });

    getter.includes("getetnapp") &&
    ( response = {
        ...response,
        etnapp: await communication.GetETNAPP()
    });

    getter.includes("getcoultservice") &&
    ( response = {
        ...response,
        coultservice: await communication.GetCouldService()
    });

    getter.includes("getnatupnp") &&
    ( response = {
        ...response,
        natupnp: await communication.GetNATUpnp()
    });

    getter.includes("getnatupnpstatus") &&
    ( response = {
        ...response,
        natupnpstatus: await communication.GetNATUPnpStatus()
    });

    getter.includes("getnatadminaccess") &&
    ( response = {
        ...response,
        natadminaccess: await communication.GetNATAdminAccess()
    });

    getter.includes("getftp") &&
    ( response = {
        ...response,
        ftp: await communication.GetFTP()
    });

    console.log("response: ", response);

    return response;
}