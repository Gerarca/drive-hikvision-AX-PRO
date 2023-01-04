const { configArea } = require("../configDevice/configArea.controller");
const { configCommunication } = require("../configDevice/configCommunication.controller");
const { configDashboard } = require("../configDevice/configDashboard.controller");
const { configDeviceAlarm } = require("../configDevice/configDeviceAlarm.controller");
const { configEvents } = require("../configDevice/configEvents.controller");
const { configSystem } = require("../configDevice/configSystem.controller");
const { configMaintenance } = require("../configDevice/configMaintenance.controller");

exports.configDevice = (config, id) => {

    const { command } = config;

    switch (command){
        case "configArea":
            configArea(config, id);
            break;
        case "configCommunication":
            configCommunication(config, id);
            break;
        case "configDashboard":
            configDashboard(config, id);
            break;
        case "configDevice":
            configDeviceAlarm(config, id);
            break;
        case "configEvents":
            configEvents(config, id);
            break;
        case "configMaintenance":
            configMaintenance(config, id);
            break;
        case "configSystem":
            configSystem(config, id);
            break;
    }
}