const { request, response } = require("express");
const device = require("../../controller/device.controller");

exports.configDeviceAlarm = async (req = request, device) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.device &&
    ( device.PutDevice({body:setter.device, device}) );

    setter.enrollezones &&
    ( device.EnrolleZone({body:setter.enrollezones, device}) );

    setter.editzone &&
    ( device.SetOneZone({body:setter.editzone, device}) );

    setter.detectorsetingzone &&
    ( device.SetDetectorSetting({body:setter.detectorsetingzone, device}) );

    setter.armpartitionhome &&
    ( device.SetArmPartitionHome({body:setter.armpartitionhome, device}) );

    setter.armpartitionaway &&
    ( device.SetArmPartitionAway({body:setter.armpartitionaway, device}) )

    setter.disarmpartition &&
    ( device.SetDisarmPartition({body:setter.disarmpartition, device}) );

    setter.clearalarm &&
    ( device.SetClearAlarm({body:setter.clearalarm, device}) );

    setter.relay &&
    ( device.SetRelay({body:setter.relay, device}) );

    setter.enrollesounder &&
    ( device.EnrollSounder({body:setter.enrollesounder, device}) );

    setter.enrollkeypad &&
    ( device.EnrollKeyPad({body:setter.enrollkeypad, device}) );

    setter.enrolltagreader &&
    ( device.EnrollTagReader({body:setter.enrolltagreader, device}) );

    setter.enrollkeyfob &&
    ( device.EnrollKeyFob({body:setter.enrollkeyfob, device}) );

    setter.enrolltag &&
    ( device.Enrolltag({body:setter.enrolltag, device}));

    setter.enrollautomation &&
    ( device.EnrollAutomation({body:setter.enrollautomation, device}));

    setter.enrollrepeater &&
    ( device.EnrollRepeater({body:setter.enrollrepeater, device}));

    setter.enrolltransmitter &&
    ( device.EnrollTransmitter({body:setter.enrolltransmitter, device}));

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

    let array = getter[2].split("/");
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
 
    console.log("response: ", response);

    return response;
}