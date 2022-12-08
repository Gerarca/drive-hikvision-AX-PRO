const { Router } = require('express');
const router = Router();
const dashboard = require("../controller/dashboard.controller");;

router.get("/getstatusalarm", dashboard.statusAlarma );
router.get("/getsubsistemas", dashboard.statusSubSistemas);

module.exports = router;