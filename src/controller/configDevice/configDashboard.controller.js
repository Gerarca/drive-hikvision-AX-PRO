const { request, response } = require("express");
const dashboard = require("../../controller/dashboard.controller");

exports.configDashboard = async (req = request, id) => {

    let response="";
    const getter = req.get;
    //const setter = req.set;

    getter.includes("getstatusalarm") &&
    ( response = {
        ...response,
        statusalarm: await dashboard.statusAlarma(id)
    });
 
    getter.includes("getsubsistemas") &&
    ( response = {
        ...response,
        subsistemas: await dashboard.statusSubSistemas(id)
    });

    console.log("response: ", response);

    return response;
}