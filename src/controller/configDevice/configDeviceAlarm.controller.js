const { request, response } = require("express");
const device = require("../../controller/device.controller");

exports.configDeviceAlarm = async (req = request, res = response) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.device &&
    ( device.PutDevice({body:setter.device, id}) );

    setter.enrollezones &&
    ( device.EnrolleZone({body:setter.enrollezones, id}) );

    setter.editzone &&
    ( device.SetOneZone({body:setter.editzone, id}) );

    setter.detectorsetingzone &&
    ( device.SetDetectorSetting({body:setter.detectorsetingzone, id}) );

    setter.armpartitionhome &&
    ( device.SetArmPartitionHome({body:setter.armpartitionhome, id}) );

    setter.armpartitionaway &&
    ( device.SetArmPartitionAway({body:setter.armpartitionaway, id}) )

    setter.disarmpartition &&
    ( device.SetDisarmPartition({body:setter.disarmpartition, id}) );

    setter.clearalarm &&
    ( device.SetClearAlarm({body:setter.clearalarm, id}) );

    setter.relay &&
    ( device.SetRelay({body:setter.relay, id}) );

    setter.enrollesounder &&
    ( device.EnrollSounder({body:setter.enrollesounder, id}) );

    setter.enrollkeypad &&
    ( device.EnrollKeyPad({body:setter.enrollkeypad, id}) );

    setter.enrolltagreader &&
    ( device.EnrollTagReader({body:setter.enrolltagreader, id}) );

    setter.enrollkeyfob &&
    ( device.EnrollKeyFob({body:setter.enrollkeyfob, id}) );

    setter.enrolltag &&
    ( device.Enrolltag({body:setter.enrolltag, id}));

    setter.enrollautomation &&
    ( device.EnrollAutomation({body:setter.enrollautomation, id}));

    setter.enrollrepeater &&
    ( device.EnrollRepeater({body:setter.enrollrepeater, id}));

    setter.enrolltransmitter &&
    ( device.EnrollTransmitter({body:setter.enrolltransmitter, id}));

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

    let array = getter[2].split("/");
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
 
    console.log("response: ", response);

    return response;
}