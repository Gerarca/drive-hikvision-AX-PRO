const area = require("../../controller/area.controller");
const communication = require("../communication.controller");
const dashboard = require("../../controller/dashboard.controller");
const device = require("../../controller/device.controller");
const maintenance = require("../../controller/maintenance.controller");
const system = require("../../controller/system.controller");

exports.configGetters = async (id)  => {
    let response="";

    getter.includes("getlistarea") &&
    ( response = {
        ...response,
        listArea: await area.GetListArea(id)
    });
 
    getter.includes("getlistzones") &&
    ( response = {
        ...response,
        listZones: await area.GetListZones(id)
    });

    getter.includes("getadminaccess") &&
    ( response = {
        ...response,
        wiredNetworkAdminAcces: await communication.GetWiredNetworkAdminAcces(id)
    });

    getter.includes("getwlan") &&
    ( response = {
        ...response,
        wlan: await communication.GetWLAN(id)
    });

    getter.includes("getwireless") &&
    ( response = {
        ...response,
        wireless: await communication.GetWireless(id)
    });

    getter.includes("getwirelessserver") &&
    ( response = {
        ...response,
        wirelessserver: await communication.GetWirelessServer(id)
    });

    getter.includes("getaccesspointlist") &&
    ( response = {
        ...response,
        accesspointlist: await communication.GetAccessPointList(id)
    });

    getter.includes("getarc") &&
    ( response = {
        ...response,
        arc: await communication.GetAlarmRecivingCenter(id)
    });

    getter.includes("getehomelist") &&
    ( response = {
        ...response,
        ehomelist: await communication.GetEHomeList(id)
    });

    getter.includes("getivms") &&
    ( response = {
        ...response,
        ivms: await communication.GetEventTypeNotificationIVMS(id)
    });

    let array = getter[8].split("/");
    getter.includes(getter[8]) &&
    ( response = {
        ...response,
        etnalarm: await communication.GetETNAlarmReceivingCenter({params:{id:array[1]}, id})
    });

    getter.includes("getetnapp") &&
    ( response = {
        ...response,
        etnapp: await communication.GetETNAPP(id)
    });

    getter.includes("getcoultservice") &&
    ( response = {
        ...response,
        coultservice: await communication.GetCouldService(id)
    });

    getter.includes("getnatupnp") &&
    ( response = {
        ...response,
        natupnp: await communication.GetNATUpnp(id)
    });

    getter.includes("getnatupnpstatus") &&
    ( response = {
        ...response,
        natupnpstatus: await communication.GetNATUPnpStatus(id)
    });

    getter.includes("getnatadminaccess") &&
    ( response = {
        ...response,
        natadminaccess: await communication.GetNATAdminAccess(id)
    });

    getter.includes("getftp") &&
    ( response = {
        ...response,
        ftp: await communication.GetFTP(id)
    });

    getter.includes("getstatusalarm") &&
    ( response = {
        ...response,
        statusalarm: await dashboard.statusAlarma(id)
    });
 
    getter.includes("getsubsistemas") &&
    ( response = {
        ...response,
        subsistemas: await dashboard.statusSubSistemas(id)
    });

    getter.includes("getbasicsettingzones") &&
    ( response = {
        ...response,
        basicsettingzones: await device.GetBSZones(id)
    });

    getter.includes("getzones") &&
    ( response = {
        ...response,
        zones: await device.GetZones(id)
    });

    array = getter[2].split("/");
    getter.includes(getter[2]) &&
    ( response = {
        ...response,
        detectorsettingzone: await device.URLGetDetectorSetting({params:{id:array[1]}, id})
    });

    getter.includes("getstatuspartition") &&
    ( response = {
        ...response,
        statuspartition: await device.GetStatusPartition(id)
    });

    getter.includes("getmonitoralarm") &&
    ( response = {
        ...response,
        monitoralarm: await device.GetMonitorAlarm(id)
    });

    getter.includes("getsounder") &&
    ( response = {
        ...response,
        sounder: await device.GetSounder(id)
    });

    getter.includes("getkeypad") &&
    ( response = {
        ...response,
        keypad: await device.GetKeyPad(id)
    });

    getter.includes("gettagreader") &&
    ( response = {
        ...response,
        tagreader: await device.GetTagReader(id)
    });

    getter.includes("getkeyfob") &&
    ( response = {
        ...response,
        keyfob: await device.GetKeyFob(id)
    });

    getter.includes("gettag") &&
    ( response = {
        ...response,
        tag: await device.GetTag(id)
    });

    getter.includes("getautomation") &&
    ( response = {
        ...response,
        automation: await device.GetAutomation(id)
    });

    getter.includes("getrepeater") &&
    ( response = {
        ...response,
        repeater: await device.GetRepeater(id)
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await device.GetTransmitter(id)
    });
 
    getter.includes("getcommunicationstatus") &&
    ( response = {
        ...response,
        communicationstatus: await maintenance.GetCommunicationStatus(id)
    });
 
    getter.includes("getbaterystatus") &&
    ( response = {
        ...response,
        baterystatus: await maintenance.GetSBateryStatus(id)
    });

    getter.includes("getzonestatus") &&
    ( response = {
        ...response,
        zonestatus: await maintenance.GetZoneStatus(id)
    });

    getter.includes("getsounderstatus") &&
    ( response = {
        ...response,
        sounderstatus: await maintenance.GetSounderStatus(id)
    });

    getter.includes("getautomatition") &&
    ( response = {
        ...response,
        automatition: await maintenance.GetAutomatitation(id)
    });

    getter.includes("getrepeaterstatus") &&
    ( response = {
        ...response,
        repeaterstatus: await maintenance.GetRepeaterStatus(id)
    });

    getter.includes("gettagreaderstatus") &&
    ( response = {
        ...response,
        tagreaderstatus: await maintenance.GetTagReaderStatus(id)
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await maintenance.GetTransmitter(id)
    });

    getter.includes("getparsetestlist") &&
    ( response = {
        ...response,
        parsetestlist: await maintenance.GetParseTestList(id)
    });

    getter.includes("gettest") &&
    ( response = {
        ...response,
        test: await maintenance.GetTest(id)
    });

    getter.includes("getkeyfobstatus") &&
    ( response = {
        ...response,
        keyfobstatus: await maintenance.GetKeyFobStatus(id)
    });

    getter.includes("getmaintenance") &&
    ( response = {
        ...response,
        maintenance: await maintenance.GetMaintenance(id)
    });

    
    getter.includes("getdevice") &&
    ( response = {
        ...response,
        device: await system.GetInformacionDispositivo(id)
    });
 
    getter.includes("getmanagement") &&
    ( response = {
        ...response,
        management: await system.GetAdministracion(id)
    });

    getter.includes("gettimemanagement") &&
    ( response = {
        ...response,
        timemanagement: await system.GetTimeManagement(id)
    });

    getter.includes("gettimemanagementmode") &&
    ( response = {
        ...response,
        timemanagementmode: await system.GetTimeManagementMode(id)
    });

    getter.includes("getscheduletimer") &&
    ( response = {
        ...response,
        scheduletimer: await system.GetScheduleTimer(id)
    });

    getter.includes("getpanelalarmduration") &&
    ( response = {
        ...response,
        panelalarmduration: await system.GetPanelAlarmDuration(id)
    });

    getter.includes("getpanelfault") &&
    ( response = {
        ...response,
        panelfault: await system.GetVerificacionFallasPanel(id)
    });

    getter.includes("getarmoptions") &&
    ( response = {
        ...response,
        armoptions: await system.GetEquipajeOpciones(id)
    });

    getter.includes("getmoderegisterdevice") &&
    ( response = {
        ...response,
        moderegisterdevice: await system.GetModoRegistroDispositivo(id)
    });

    getter.includes("getsshsetting") &&
    ( response = {
        ...response,
        sshsetting: await system.GetSSHSettings(id)
    });

    getter.includes("getuserlockout") &&
    ( response = {
        ...response,
        userlockout: await system.GetUserLockoutAttemps(id)
    });

    getter.includes("getunlockalluser") &&
    ( response = {
        ...response,
        unlockalluser: await system.GetAllUserlocked(id)
    });

    getter.includes("getmodulelockingsetting") &&
    ( response = {
        ...response,
        modulelockingsetting: await system.GetModuleLockingSetting(id)
    });

    console.log("response: ", response);
}