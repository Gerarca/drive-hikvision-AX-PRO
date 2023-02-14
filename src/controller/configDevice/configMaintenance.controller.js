const { request, response } = require("express");
const maintenance = require("../../controller/maintenance.controller");

exports.configMaintenance = async (req=request, device) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.test &&
    ( maintenance.SetTest({body:setter.test, device}) );

    setter.tamperalarmonhpclogin &&
    ( maintenance.SetTamperAlarmOnHPCLogin({body:setter.tamperalarmonhpclogin, device}) );

    getter.includes("getcommunicationstatus") &&
    ( response = {
        ...response,
        communicationstatus: await maintenance.GetCommunicationStatus(device)
    });
 
    getter.includes("getbaterystatus") &&
    ( response = {
        ...response,
        baterystatus: await maintenance.GetSBateryStatus(device)
    });

    getter.includes("getzonestatus") &&
    ( response = {
        ...response,
        zonestatus: await maintenance.GetZoneStatus(device)
    });

    getter.includes("getsounderstatus") &&
    ( response = {
        ...response,
        sounderstatus: await maintenance.GetSounderStatus(device)
    });

    getter.includes("getautomatition") &&
    ( response = {
        ...response,
        automatition: await maintenance.GetAutomatitation(device)
    });

    getter.includes("getrepeaterstatus") &&
    ( response = {
        ...response,
        repeaterstatus: await maintenance.GetRepeaterStatus(device)
    });

    getter.includes("gettagreaderstatus") &&
    ( response = {
        ...response,
        tagreaderstatus: await maintenance.GetTagReaderStatus(device)
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await maintenance.GetTransmitter(device)
    });

    getter.includes("getparsetestlist") &&
    ( response = {
        ...response,
        parsetestlist: await maintenance.GetParseTestList(device)
    });

    getter.includes("gettest") &&
    ( response = {
        ...response,
        test: await maintenance.GetTest(device)
    });

    getter.includes("getkeyfobstatus") &&
    ( response = {
        ...response,
        keyfobstatus: await maintenance.GetKeyFobStatus(device)
    });

    getter.includes("getmaintenance") &&
    ( response = {
        ...response,
        maintenance: await maintenance.GetMaintenance(device)
    });

    console.log("response: ", response);

    return response;
}