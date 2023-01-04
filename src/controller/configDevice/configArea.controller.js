const { request, response } = require("express");
const area = require("../../controller/area.controller");

exports.configArea = async (req = request, id) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.nameArea &&
    ( area.PutNameArea({body:setter.nameArea, id}) );

    getter.includes("getlistarea") &&
    ( response = {
        ...response,
        listArea: await area.GetListArea(id)
    });
 
    getter.includes("getlistzones") &&
    ( response = {
        ...response,
        listZones: await area.GetListZones(id)
    });

    console.log("response: ", response);

    return response;
}