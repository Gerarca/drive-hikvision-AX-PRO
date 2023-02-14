const { request, response } = require("express");
const dashboard = require("../../controller/dashboard.controller");

exports.configDashboard = async (req = request, device) => {

    let response="";
    const getter = req.get;
    //const setter = req.set;

    getter.includes("getstatusalarm") &&
    ( response = {
        ...response,
        statusalarm: await dashboard.statusAlarma(device)
    });
 
    getter.includes("getsubsistemas") &&
    ( response = {
        ...response,
        subsistemas: await dashboard.statusSubSistemas(device)
    });

    console.log("response: ", response);

    return response;
}