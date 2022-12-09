const { request, response } = require("express");
const device = require("../../controller/device.controller");

exports.configDeviceAlarm = async (req = request, res = response) => {

    let response="";
    const getter = req.get;
    const setter = req.set;
    
    setter.device &&
    ( device.PutDevice({body:setter.device}) );

    setter.enrollezones &&
    ( device.EnrolleZone({body:setter.enrollezones}) );

    setter.editzone &&
    ( device.SetOneZone({body:setter.editzone}) );

    setter.detectorsetingzone &&
    ( device.SetDetectorSetting({body:setter.detectorsetingzone}) );

    setter.armpartitionhome &&
    ( device.SetArmPartitionHome({body:setter.armpartitionhome}) );

    setter.armpartitionaway &&
    ( device.SetArmPartitionAway({body:setter.armpartitionaway}) )

    setter.disarmpartition &&
    ( device.SetDisarmPartition({body:setter.disarmpartition}) );

    setter.clearalarm &&
    ( device.SetClearAlarm({body:setter.clearalarm}) );

    setter.relay &&
    ( device.SetRelay({body:setter.relay}) );

    setter.enrollesounder &&
    ( device.EnrollSounder({body:setter.enrollesounder}) );

    setter.enrollkeypad &&
    ( device.EnrollKeyPad({body:setter.enrollkeypad}) );

    setter.enrolltagreader &&
    ( device.EnrollTagReader({body:setter.enrolltagreader}) );

    setter.enrollkeyfob &&
    ( device.EnrollKeyFob({body:setter.enrollkeyfob}) );

    setter.enrolltag &&
    ( device.Enrolltag({body:setter.enrolltag}));

    setter.enrollautomation &&
    ( device.EnrollAutomation({body:setter.enrollautomation}));

    setter.enrollrepeater &&
    ( device.EnrollRepeater({body:setter.enrollrepeater}));

    setter.enrolltransmitter &&
    ( device.EnrollTransmitter({body:setter.enrolltransmitter}));

    getter.includes("getbasicsettingzones") &&
    ( response = {
        ...response,
        basicsettingzones: await device.GetBSZones()
    });

    getter.includes("getzones") &&
    ( response = {
        ...response,
        zones: await device.GetZones()
    });

    let array = getter[2].split("/");
    getter.includes(getter[2]) &&
    ( response = {
        ...response,
        detectorsettingzone: await device.URLGetDetectorSetting({params:{id:array[1]}})
    });

    getter.includes("getstatuspartition") &&
    ( response = {
        ...response,
        statuspartition: await device.GetStatusPartition()
    });

    getter.includes("getmonitoralarm") &&
    ( response = {
        ...response,
        monitoralarm: await device.GetMonitorAlarm()
    });

    getter.includes("getsounder") &&
    ( response = {
        ...response,
        sounder: await device.GetSounder()
    });

    getter.includes("getkeypad") &&
    ( response = {
        ...response,
        keypad: await device.GetKeyPad()
    });

    getter.includes("gettagreader") &&
    ( response = {
        ...response,
        tagreader: await device.GetTagReader()
    });

    getter.includes("getkeyfob") &&
    ( response = {
        ...response,
        keyfob: await device.GetKeyFob()
    });

    getter.includes("gettag") &&
    ( response = {
        ...response,
        tag: await device.GetTag()
    });

    getter.includes("getautomation") &&
    ( response = {
        ...response,
        automation: await device.GetAutomation()
    });

    getter.includes("getrepeater") &&
    ( response = {
        ...response,
        repeater: await device.GetRepeater()
    });

    getter.includes("gettransmitter") &&
    ( response = {
        ...response,
        transmitter: await device.GetTransmitter()
    });
 
    console.log("response: ", response);

    return response;
}