const { GetListAlarms } = require('../controller/gateway.controller');

exports.searchAlarmsGateway = async (id) => { 

    const data = {
        "SearchDescription":{
            "position":0,
            "maxResult":40,
            "Filter":{
                "key":""
            }
        }
    }

    let result = await GetListAlarms(data,"");
    let dataParce = JSON.parse(result);
    let listsAlarm = dataParce.SearchResult.MatchList;
    var found=false;

    listsAlarm.map( elemnt => {
        if(elemnt.Device.devIndex === id) {
            found=true;
        }    
    });

    return found;
}
