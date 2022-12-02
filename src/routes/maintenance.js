const { Router } = require('express');
const router = Router();
const maintenance = require("../controller/maintenance.controller");;

router.get("/getcommunicationstatus", maintenance.GetCommunicationStatus );
router.get("/getbaterystatus", maintenance.GetSBateryStatus);
router.get("/getzonestatus", maintenance.GetZoneStatus );
router.get("/getsounderstatus", maintenance.GetSounderStatus);
router.get("/getautomatition", maintenance.GetAutomatitation);
router.get("/getrepeaterstatus", maintenance.GetRepeaterStatus);
router.get("/gettagreaderstatus", maintenance.GetTagReaderStatus);
router.get("/gettransmitter", maintenance.GetTransmitter);
router.get("/getparsetestlist", maintenance.GetParseTestList);
router.get("/gettest", maintenance.GetTest);
router.put("/settest", maintenance.SetTest);
router.get("/getkeyfobstatus", maintenance.GetKeyFobStatus);
router.get("/getmaintenance", maintenance.GetMaintenance);
router.put("/settamperalarmonhpclogin", maintenance.SetTamperAlarmOnHPCLogin);

module.exports = router;