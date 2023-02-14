const area = require("../../controller/area.controller");
const communication = require("../communication.controller");
const dashboard = require("../../controller/dashboard.controller");
const device = require("../../controller/device.controller");
const maintenance = require("../../controller/maintenance.controller");
const system = require("../../controller/system.controller");

exports.configGetters = async (device)  => {
    let response="";

    getter.includes("getlistarea") &&
    ( response = {
        ...response,
        listArea: await area.GetListArea(device)
    });
 
    getter.includes("getlistzones") &&
    ( response = {
        ...response,
        listZones: await area.GetListZones(device)
    });

    getter.includes("getadminaccess") &&
    ( response = {
        ...response,
        wiredNetworkAdminAcces: await communication.GetWiredNetworkAdminAcces(device)
    });

    getter.includes("getwlan") &&
    ( response = {
        ...response,
        wlan: await communication.GetWLAN(device)
    });

    getter.includes("getwireless") &&
    ( response = {
        ...response,
        wireless: await communication.GetWireless(device)
    });

    getter.includes("getwirelessserver") &&
    ( response = {
        ...response,
        wirelessserver: await communication.GetWirelessServer(device)
    });

    getter.includes("getaccesspointlist") &&
    ( response = {
        ...response,
        accesspointlist: await communication.GetAccessPointList(device)
    });

    getter.includes("getarc") &&
    ( response = {
        ...response,
        arc: await communication.GetAlarmRecivingCenter(device)
    });

    getter.includes("getehomelist") &&
    ( response = {
        ...response,
        ehomelist: await communication.GetEHomeList(device)
    });

    getter.includes("getivms") &&
    ( response = {
        ...response,
        ivms: await communication.GetEventTypeNotificationIVMS(device)
    });

    let array = getter[8].split("/");
    getter.includes(getter[8]) &&
    ( response = {
        ...response,
        etnalarm: await communication.GetETNAlarmReceivingCenter({params:{id:array[1]}, device})
    });

    getter.includes("getetnapp") &&
    ( response = {
        ...response,
        etnapp: await communication.GetETNAPP(device)
    });

    getter.includes("getcoultservice") &&
    ( response = {
        ...response,
        coultservice: await communication.GetCouldService(device)
    });

    getter.includes("getnatupnp") &&
    ( response = {
        ...response,
        natupnp: await communication.GetNATUpnp(device)
    });

    getter.includes("getnatupnpstatus") &&
    ( response = {
        ...response,
        natupnpstatus: await communication.GetNATUPnpStatus(device)
    });

    getter.includes("getnatadminaccess") &&
    ( response = {
        ...response,
        natadminaccess: await communication.GetNATAdminAccess(device)
    });

    getter.includes("getftp") &&
    ( response = {
        ...response,
        ftp: await communication.GetFTP(device)
    });

    getter.includes("getstatusalarm") &&
    ( response = {
        ...response,
        statusalarm: await dashboard.statusAlarma(device)
    });
 
    getter.includes("getsubsistemas") &&
    ( response = {
        ...response,
        subsistemas: await dashboard.statusSubSistemas(device)
    });

    getter.includes("getbasicsettingzones") &&
    ( response = {
        ...response,
        basicsettingzones: await device.GetBSZones(device)
    });

    getter.includes("getzones") &&
    ( response = {
        ...response,
        zones: await device.GetZones(device)
    });

    array = getter[2].split("/");
    getter.includes(getter[2]) &&
    ( response = {
        ...response,
        detectorsettingzone: await device.URLGetDetectorSetting({params:{id:array[1]}, device})
    });

    getter.includes("getstatuspartition") &&
    ( response = {
        ...response,
        statuspartition: await device.GetStatusPartition(device)
    });

    getter.includes("getmonitoralarm") &&
    ( response = {
        ...response,
        monitoralarm: await device.GetMonitorAlarm(device)
    });

    getter.includes("getsounder") &&
    ( response = {
        ...response,
        sounder: await device.GetSounder(device)
    });

    getter.includes("getkeypad") &&
    ( response = {
        ...response,
        keypad: await device.GetKeyPad(device)
    });

    getter.includes("gettagreader") &&
    ( response = {
        ...response,
        tagreader: await device.GetTagReader(device)
    });

    getter.includes("getkeyfob") &&
    ( response = {
        ...response,
        keyfob: await device.GetKeyFob(device)
    });

    getter.includes("gettag") &&
    ( response = {
        ...response,
        tag: await device.GetTag(device)
    });

    getter.includes("getautomation") &&
    ( response = {
        ...response,
        automation: await device.GetAutomation(device)
    });

    getter.includes("getrepeater") &&
    ( response = {
        ...response,
        repeater: await device.GetRepeater(device)
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await device.GetTransmitter(device)
    });
 
    getter.includes("getcommunicationstatus") &&
    ( response = {
        ...response,
        communicationstatus: await maintenance.GetCommunicationStatus(device)
    });
 
    getter.includes("getbaterystatus") &&
    ( response = {
        ...response,
        baterystatus: await maintenance.GetSBateryStatus(device)
    });

    getter.includes("getzonestatus") &&
    ( response = {
        ...response,
        zonestatus: await maintenance.GetZoneStatus(device)
    });

    getter.includes("getsounderstatus") &&
    ( response = {
        ...response,
        sounderstatus: await maintenance.GetSounderStatus(device)
    });

    getter.includes("getautomatition") &&
    ( response = {
        ...response,
        automatition: await maintenance.GetAutomatitation(device)
    });

    getter.includes("getrepeaterstatus") &&
    ( response = {
        ...response,
        repeaterstatus: await maintenance.GetRepeaterStatus(device)
    });

    getter.includes("gettagreaderstatus") &&
    ( response = {
        ...response,
        tagreaderstatus: await maintenance.GetTagReaderStatus(device)
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await maintenance.GetTransmitter(device)
    });

    getter.includes("getparsetestlist") &&
    ( response = {
        ...response,
        parsetestlist: await maintenance.GetParseTestList(device)
    });

    getter.includes("gettest") &&
    ( response = {
        ...response,
        test: await maintenance.GetTest(device)
    });

    getter.includes("getkeyfobstatus") &&
    ( response = {
        ...response,
        keyfobstatus: await maintenance.GetKeyFobStatus(device)
    });

    getter.includes("getmaintenance") &&
    ( response = {
        ...response,
        maintenance: await maintenance.GetMaintenance(device)
    });

    
    getter.includes("getdevice") &&
    ( response = {
        ...response,
        device: await system.GetInformacionDispositivo(device)
    });
 
    getter.includes("getmanagement") &&
    ( response = {
        ...response,
        management: await system.GetAdministracion(device)
    });

    getter.includes("gettimemanagement") &&
    ( response = {
        ...response,
        timemanagement: await system.GetTimeManagement(device)
    });

    getter.includes("gettimemanagementmode") &&
    ( response = {
        ...response,
        timemanagementmode: await system.GetTimeManagementMode(device)
    });

    getter.includes("getscheduletimer") &&
    ( response = {
        ...response,
        scheduletimer: await system.GetScheduleTimer(device)
    });

    getter.includes("getpanelalarmduration") &&
    ( response = {
        ...response,
        panelalarmduration: await system.GetPanelAlarmDuration(device)
    });

    getter.includes("getpanelfault") &&
    ( response = {
        ...response,
        panelfault: await system.GetVerificacionFallasPanel(device)
    });

    getter.includes("getarmoptions") &&
    ( response = {
        ...response,
        armoptions: await system.GetEquipajeOpciones(device)
    });

    getter.includes("getmoderegisterdevice") &&
    ( response = {
        ...response,
        moderegisterdevice: await system.GetModoRegistroDispositivo(device)
    });

    getter.includes("getsshsetting") &&
    ( response = {
        ...response,
        sshsetting: await system.GetSSHSettings(device)
    });

    getter.includes("getuserlockout") &&
    ( response = {
        ...response,
        userlockout: await system.GetUserLockoutAttemps(device)
    });

    getter.includes("getunlockalluser") &&
    ( response = {
        ...response,
        unlockalluser: await system.GetAllUserlocked(device)
    });

    getter.includes("getmodulelockingsetting") &&
    ( response = {
        ...response,
        modulelockingsetting: await system.GetModuleLockingSetting(device)
    });

    console.log("response: ", response);
}