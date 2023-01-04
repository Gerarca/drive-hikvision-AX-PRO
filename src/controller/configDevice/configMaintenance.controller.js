const { request, response } = require("express");
const maintenance = require("../../controller/maintenance.controller");

exports.configMaintenance = async (req=request, id) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.test &&
    ( maintenance.SetTest({body:setter.test, id}) );

    setter.tamperalarmonhpclogin &&
    ( maintenance.SetTamperAlarmOnHPCLogin({body:setter.tamperalarmonhpclogin, id}) );

    getter.includes("getcommunicationstatus") &&
    ( response = {
        ...response,
        communicationstatus: await maintenance.GetCommunicationStatus(id)
    });
 
    getter.includes("getbaterystatus") &&
    ( response = {
        ...response,
        baterystatus: await maintenance.GetSBateryStatus(id)
    });

    getter.includes("getzonestatus") &&
    ( response = {
        ...response,
        zonestatus: await maintenance.GetZoneStatus(id)
    });

    getter.includes("getsounderstatus") &&
    ( response = {
        ...response,
        sounderstatus: await maintenance.GetSounderStatus(id)
    });

    getter.includes("getautomatition") &&
    ( response = {
        ...response,
        automatition: await maintenance.GetAutomatitation(id)
    });

    getter.includes("getrepeaterstatus") &&
    ( response = {
        ...response,
        repeaterstatus: await maintenance.GetRepeaterStatus(id)
    });

    getter.includes("gettagreaderstatus") &&
    ( response = {
        ...response,
        tagreaderstatus: await maintenance.GetTagReaderStatus(id)
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await maintenance.GetTransmitter(id)
    });

    getter.includes("getparsetestlist") &&
    ( response = {
        ...response,
        parsetestlist: await maintenance.GetParseTestList(id)
    });

    getter.includes("gettest") &&
    ( response = {
        ...response,
        test: await maintenance.GetTest(id)
    });

    getter.includes("getkeyfobstatus") &&
    ( response = {
        ...response,
        keyfobstatus: await maintenance.GetKeyFobStatus(id)
    });

    getter.includes("getmaintenance") &&
    ( response = {
        ...response,
        maintenance: await maintenance.GetMaintenance(id)
    });

    console.log("response: ", response);

    return response;
}