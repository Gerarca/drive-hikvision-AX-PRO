const { Router } = require('express');
const router = Router();
const events = require("../controller/event.controller");

router.post("/getevents", events.GetEvents);
router.delete("/deletesubscribeevents", events.DelSubscribeEvents);

module.exports = router;