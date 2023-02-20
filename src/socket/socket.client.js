const WebSocket = require("ws");
const { getDispositivo } = require("../controller/database/db.controller");
const { searchAlarmsGateway } = require("../gateway/gateway");
const { configDevice } = require("../controller/configDevice/configDevice.controller");
const { configGetters } = require("../controller/configDevice/configGetters");

const socket = new WebSocket(process.env.NETSOCS_SOCKET_HTTP_URL);

socket.onopen = (s) => {
  // setInterval(
  //   () =>
  //     socket.send(
  //       JSON.stringify({
  //         key: "directCamera",
  //         data: {
  //           key: "get",
  //           data: {
  //             key: "resolution",
  //             data: {
  //               key: "width",
  //               data: 1280,
  //             },
  //           },
  //         },
  //       })
  //     ),
  //   15000
  // );

};

socket.onmessage = async (msg) => {
    //console.log("Driver Alarma: ", msg.data);
    const dataJson =  JSON.parse(msg.data);
    var id="";
    if( dataJson.key === "ConfigAlarmaAXPRO" ){
        var data = dataJson.data[0];
        if(data.command === "configOperateAlarma"){ 
            configDevice(data);
        }else{
            id = data.devices[0];    
            if( await getDispositivo(id) ){
                if( await searchAlarmsGateway(id) ){  
                    configDevice(data, id);
                }else{
                    console.log(data.set.error, " on gateway");
                }      
                    
            }else{
                console.log(data.set.error, " on database");
            } 
        }        
    }   
};


exports.sendMessageToServer = (msg)=>{
    console.log("Driver Alarma: ", msg.data);
    const data =  JSON.parse(msg.data);
    var id="";
    
    if( data.key === "ConfigAlarmaAXPRO" ){
        id = data.data.devices[0];
        socket.send(
            JSON.stringify({
            key: "directCamera",
            to: "alarmHokvision",
            from : "configModule",
            data : configGetters(id)
            })
        )
    }
  }

  