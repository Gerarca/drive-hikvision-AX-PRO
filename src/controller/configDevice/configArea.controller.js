const { request, response } = require("express");
const area = require("../../controller/area.controller");

exports.configArea = async (req = request, res = response) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.nameArea &&
    ( area.PutNameArea({body:setter.nameArea}) );

    getter.includes("getlistarea") &&
    ( response = {
        ...response,
        listArea: await area.GetListArea()
    });
 
    getter.includes("getlistzones") &&
    ( response = {
        ...response,
        listZones: await area.GetListZones()
    });

    console.log("response: ", response);

    return response;
}