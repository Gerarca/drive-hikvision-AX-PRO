const { Router } = require('express');
const router = Router();
const system = require("../controller/system.controller");

router.get("/getdevice", system.GetInformacionDispositivo);
router.put("/setnamedevice", system.GetNombreDispositivo);
router.get("/getmanagement", system.GetAdministracion);
router.put("/setmanagement", system.PutAdministracion);
router.get("/gettimemanagement", system.GetTimeManagement);
router.put("/settyimemanagement", system.PutTimeManagement);
router.get("/gettimemanagementmode", system.GetTimeManagementMode);
router.put("/settyimemanagementmode", system.PutTimeManagementMode);
router.put("/setdstmanagement", system.PutDSTManagement);
router.get("/getscheduletimer", system.GetScheduleTimer);
router.put("/setscheduletimer", system.PutScheduleTimer);
router.get("/getpanelalarmduration", system.GetPanelAlarmDuration);
router.put("/setpanelalarmduration", system.PutPanelAlarmDuration);
router.get("/getpanelfault", system.GetVerificacionFallasPanel);
router.put("/setpanelfault", system.PutVerificacionFallasPanel);
router.get("/getarmoptions", system.GetEquipajeOpciones);
router.put("/setarmoptions", system.PutEquipajeOpciones);
router.get("/getmoderegisterdevice", system.GetModoRegistroDispositivo);
router.put("/setmoderegisterdevice", system.PutModoRegistroDispositivo);
router.get("/getsshsetting", system.GetSSHSettings);
router.put("/setsshsetting", system.PutSSHSettings );
router.get("/getuserlockout", system.GetUserLockoutAttemps);
router.put("/setuserlockout", system.PutUserLockoutAttemps);
router.get("/getunlockalluser", system.GetAllUserlocked);
router.put("/setunlockalluser", system.PutAllUserUnlock);
router.get("/getmodulelockingsetting", system.GetModuleLockingSetting);
router.put("/setmodulelockingsetting", system.PutModuleLockingSetting);


module.exports = router;