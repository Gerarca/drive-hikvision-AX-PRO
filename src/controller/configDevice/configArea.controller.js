const { request, response } = require("express");
const area = require("../../controller/area.controller");

exports.configArea = async (req = request, device) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.nameArea &&
    ( area.PutNameArea({body:setter.nameArea, device}) );

    getter.includes("getlistarea") &&
    ( response = {
        ...response,
        listArea: await area.GetListArea(device)
    });
 
    getter.includes("getlistzones") &&
    ( response = {
        ...response,
        listZones: await area.GetListZones(device)
    });

    console.log("response: ", response);

    return response;
}