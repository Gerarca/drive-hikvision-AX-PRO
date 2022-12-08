const { configArea } = require("../configDevice/configArea.controller");

exports.configDevice = (config) => {

    const { command } = config;

    switch (command){
        case "configArea":
            configArea(config);
            break;
        case "configCommunication":

            break;
        case "configDashboard":

            break;
        case "configDevice":

            break;
        case "configEvents":

            break;
        case "configMaintenance":

            break;

        case "configSystem":

            break;
    }

}