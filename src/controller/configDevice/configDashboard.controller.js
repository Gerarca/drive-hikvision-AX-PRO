const { request, response } = require("express");
const dashboard = require("../../controller/dashboard.controller");

exports.configDashboard = async (req = request, res = response) => {

    let response="";
    const getter = req.get;
    //const setter = req.set;

    getter.includes("getstatusalarm") &&
    ( response = {
        ...response,
        statusalarm: await dashboard.statusAlarma()
    });
 
    getter.includes("getsubsistemas") &&
    ( response = {
        ...response,
        subsistemas: await dashboard.statusSubSistemas()
    });

    console.log("response: ", response);

    return response;
}