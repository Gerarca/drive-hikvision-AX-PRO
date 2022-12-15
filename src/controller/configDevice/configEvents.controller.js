const { request, response } = require("express");
const { GetEvents, DelSubscribeEvents } = require("../../controller/event.controller");

exports.configEvents = async (req = request, res = response) => {

    let response="";
    const getter = req.get;
    //const setter = req.set;
    const bodyEvent={
        "SubscribeDeviceMgmt":{
            "eventMode":"all",
            "defenceMode":"all"
        }
    };

    getter.includes("getsubscribeevents") &&
    ( response = {
        ...response,
        subscribeevents: await GetEvents({body:bodyEvent})
    });

    getter.includes("getunsubscribeevents") &&
    ( response = {
        ...response,
        unsubscribeevents: await DelSubscribeEvents()
    });

    console.log("response: ", response);

    return response;
}