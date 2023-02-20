const { configArea } = require("../configDevice/configArea.controller");
const { configCommunication } = require("../configDevice/configCommunication.controller");
const { configDashboard } = require("../configDevice/configDashboard.controller");
const { configDeviceAlarm } = require("../configDevice/configDeviceAlarm.controller");
const { configEvents } = require("../configDevice/configEvents.controller");
const { configSystem } = require("../configDevice/configSystem.controller");
const { configMaintenance } = require("../configDevice/configMaintenance.controller");
const { confiOperateAlarm } = require("../configDevice/configOperateAlarm.controller");
const { infoDevice } = require("../../utils/functions/infoDevice.utils");

exports.configDevice = async (config, id) => {

    const { command } = config;
    const device = await infoDevice(id);

    switch (command){
        case "configArea":
            configArea(config, device);
            break;
        case "configCommunication":
            configCommunication(config, device);
            break;
        case "configDashboard":
            configDashboard(config, device);
            break;
        case "configDevice":
            configDeviceAlarm(config, device);
            break;
        case "configEvents":
            configEvents(config, device);
            break;
        case "configMaintenance":
            configMaintenance(config, device);
            break;
        case "configSystem":
            configSystem(config, device);
            break;
        case "configOperateAlarma":
            confiOperateAlarm(config);
            break;
    }
}