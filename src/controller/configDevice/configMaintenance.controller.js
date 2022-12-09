const { request, response } = require("express");
const maintenance = require("../../controller/maintenance.controller");

exports.configMaintenance = async (req=request, res=response) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.test &&
    ( maintenance.SetTest({body:setter.test}) );

    setter.tamperalarmonhpclogin &&
    ( maintenance.SetTamperAlarmOnHPCLogin({body:setter.tamperalarmonhpclogin}) );

    getter.includes("getcommunicationstatus") &&
    ( response = {
        ...response,
        communicationstatus: await maintenance.GetCommunicationStatus()
    });
 
    getter.includes("getbaterystatus") &&
    ( response = {
        ...response,
        baterystatus: await maintenance.GetSBateryStatus()
    });

    getter.includes("getzonestatus") &&
    ( response = {
        ...response,
        zonestatus: await maintenance.GetZoneStatus()
    });

    getter.includes("getsounderstatus") &&
    ( response = {
        ...response,
        sounderstatus: await maintenance.GetSounderStatus()
    });

    getter.includes("getautomatition") &&
    ( response = {
        ...response,
        automatition: await maintenance.GetAutomatitation()
    });

    getter.includes("getrepeaterstatus") &&
    ( response = {
        ...response,
        repeaterstatus: await maintenance.GetRepeaterStatus()
    });

    getter.includes("gettagreaderstatus") &&
    ( response = {
        ...response,
        tagreaderstatus: await maintenance.GetTagReaderStatus()
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await maintenance.GetTransmitter()
    });

    getter.includes("getparsetestlist") &&
    ( response = {
        ...response,
        parsetestlist: await maintenance.GetParseTestList()
    });

    getter.includes("gettest") &&
    ( response = {
        ...response,
        test: await maintenance.GetTest()
    });

    getter.includes("getkeyfobstatus") &&
    ( response = {
        ...response,
        keyfobstatus: await maintenance.GetKeyFobStatus()
    });

    getter.includes("getmaintenance") &&
    ( response = {
        ...response,
        maintenance: await maintenance.GetMaintenance()
    });

    console.log("response: ", response);

    return response;
}