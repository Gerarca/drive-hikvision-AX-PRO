const { Router } = require('express');
const router = Router();
const events = require("../controller/event.controller");

router.get("/getevents", events.GetEvents);
router.delete("/deletesubscribeevents", events.DelSubscribeEvents);

module.exports = router;