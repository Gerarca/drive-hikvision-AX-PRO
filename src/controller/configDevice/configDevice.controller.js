const { configArea } = require("../configDevice/configArea.controller");
const { configCommunication } = require("../configDevice/configCommunication.controller");
const { configDashboard } = require("../configDevice/configDashboard.controller");
const { configDeviceAlarm } = require("../configDevice/configDeviceAlarm.controller");
const { configEvents } = require("../configDevice/configEvents.controller");
const { configSystem } = require("../configDevice/configSystem.controller");
const { configMaintenance } = require("../configDevice/configMaintenance.controller");

exports.configDevice = (config) => {

    const { command } = config;

    switch (command){
        case "configArea":
            configArea(config);
            break;
        case "configCommunication":
            configCommunication(config);
            break;
        case "configDashboard":
            configDashboard(config);
            break;
        case "configDevice":
            configDeviceAlarm(config);
            break;
        case "configEvents":
            configEvents(config);
            break;
        case "configMaintenance":
            configMaintenance(config);
            break;
        case "configSystem":
            configSystem(config);
            break;
    }
}