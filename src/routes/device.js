const { Router } = require('express');
const router = Router();
const device = require("../controller/device.controller");

router.get("/getdevice", device.GetDevice);
router.put("/setdevice", device.PutDevice);
router.get("/getbasicsettingzones", device.GetBSZones);
router.get("/getbasicsettingsusbsyst", device.GetBSSubSys);
router.put("/setbasicsettingsusbsyst", device.PutBSSubSys);
router.get("/getzones", device.GetZones);
router.put("/seteditzone/:id", device.SetOneZone);
router.get("/getdetectorsettingzone/:id", device.URLGetDetectorSetting);
router.put("/setdetectorsetingzone/:id", device.SetDetectorSetting);
router.put("/setarmpartitionhome", device.SetArmPartitionHome); /*--*/
router.put("/setarmpartitionaway", device.SetArmPartitionAway); /*--*/
router.put("/setdisarmpartition", device.SetDisarmPartition);   /*--*/
router.put("/setclearalarm", device.SetClearAlarm);
router.put("/setrelay", device.SetRelay);
router.get("/getstatuspartition", device.GetStatusPartition);
router.get("/getmonitoralarm", device.GetMonitorAlarm);

module.exports = router;