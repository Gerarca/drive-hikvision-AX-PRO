exports.eventsApiRestSimulador = (ID) => {
 
    const Router = {
        3441:   '/v1/topologia/alarm/alarmArmingStay',
        1401:   '/v1/topologia/alarm/alarmDisarming',
        3401:   '/v1/topologia/alarm/alarmArming',
        1103:   '/v1/topologia/alarm/alarmInstant',	
        11033:  '/v1/topologia/alarm/alarmInstant', //de prueba
        3103:   '/v1/topologia/alarm/alarmInstantRestored',
        1110:	'/v1/topologia/alarm/fireAlarm',	
        1129:	'/v1/topologia/alarm/alarmPanic',
        3129:	'/v1/topologia/alarm/alarmPanicRestored',
        1130:	'/v1/topologia/alarm/alarmAntitheft',
        3130:	'/v1/topologia/alarm/alarmAntitheftRestored',
        1137:	'/v1/topologia/alarm/alarmTamperDevice',
        3137:	'/v1/topologia/alarm/alarmTamperDeviceRestored',
        1207:	'/v1/topologia/alarm/zonePreAlarm',
        2107:	'/v1/topologia/alarm/zonePreAlarmRestored',
        1301:	'/v1/topologia/alarm/AcPowerOff',
        3301:	'/v1/topologia/alarm/AcPowerOn',
        1302:	'/v1/topologia/alarm/alarmLowBatery',
        3302:	'/v1/topologia/alarm/alarmNormalBatery',
        1383:	'/v1/topologia/alarm/alarmTamperSensor',
        3383:	'/v1/topologia/alarm/alarmTamperSensor',
        1403:	'/v1/topologia/alarm/alarmDisarmingAuto',
        3403:	'/v1/topologia/alarm/alarmArmingAuto',
        1406:	'/v1/topologia/alarm/alarmCleaning',
        3442:	'/v1/topologia/alarm/alarmArmingForced',
        1570:	'/v1/topologia/alarm/alarmBypass',
        3570:	'/v1/topologia/alarm/alarmBypassRestored',
        3914:	'/v1/topologia/alarm/wirelessDetectorConnected',
        1915:	'/v1/topologia/alarm/wirelessDetectorLowBattery',
        1922:   '/v1/topologia/alarm/wifiCommunicationFault',
        3922:	'/v1/topologia/alarm/wifiConnected',
        1941:	'/v1/topologia/alarm/tamperingAlarmStarted',
        3941:	'/v1/topologia/alarm/tamperingAlarmStopped',
        1975:	'/v1/topologia/alarm/deleteDetector',
        3975:	'/v1/topologia/alarm/addDetector'     
    };

    const defaultURL = undefined;

    return  Router[ID] || defaultURL;
}