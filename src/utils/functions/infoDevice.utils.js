const { getInfoDevice, getDispositivos } = require("../../controller/database/db.controller");

exports.infoDevice = async ( id = 101 ) => {  
    try {  
            const device = await getInfoDevice(parseInt(id));
            return await device; 
    } catch (error) {
        return JSON.stringify("Id Don't found on Data Base");
    }  
}
