const { Router } = require('express');
const router = Router();
const area = require("../controller/area.controller");

router.get("/getlistarea", area.GetListArea);
router.put("/setnamearea", area.PutNameArea);
router.get("/getlistzones", area.GetListZones);

module.exports = router;