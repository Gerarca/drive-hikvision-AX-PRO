const { request, response } = require("express");
const { postDevice, putDevice, deleteDevice } = require("../../controller/database/db.controller");

exports.confiOperateAlarm = async (req = request, device) => {

    let response="";
    const setter = req.set;
    
    setter.register &&
    ( response = {
        ...response,
        register: await postDevice({ "body": setter.register }) 
    });

    setter.update &&
    ( response = {
        ...response,
        update: await putDevice({ "body": setter.update }) 
    });

    setter.delete &&
    ( response = {
        ...response,
        delete: await deleteDevice(setter.delete.IDDispositivo) 
    });

    console.log("response: ", response);

    return response;
}