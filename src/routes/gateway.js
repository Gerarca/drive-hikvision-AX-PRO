const { Router } = require('express');
const router = Router();
const gateway = require("../controller/gateway.controller");

router.post("/getlistalarms", gateway.GetListAlarms);

module.exports = router;