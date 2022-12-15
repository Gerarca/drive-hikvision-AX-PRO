const WebSocket = require("ws");
const { getDispositivo } = require("../controller/database/db.controller");
const { searchAlarmsGateway } = require("../gateway/gateway");
const { configDevice } = require("../controller/configDevice/configDevice.controller");

const socket = new WebSocket("ws://52.200.131.231:5003");

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
    console.log("Driver Alarma: ", msg.data);
    const data =  JSON.parse(msg.data);
    var id="";
    
    for(let i=0; i<data.data[0].devices.length; i++){ 
        id = data.data[0].devices[i];

        if( await getDispositivo(id) ){
            if( await searchAlarmsGateway(id) ){  
                //console.log("Id Device Success!");
                configDevice(data.data[0]);
            }else{
                console.log(data.data[0].set.error, " on gateway");
            }      
                
        }else{
            console.log(data.data[0].set.error, " on database");
        } 
    }    
};