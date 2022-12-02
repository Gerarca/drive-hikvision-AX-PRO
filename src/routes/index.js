const { Router } = require('express');
const router = Router();

router.use("/device", require("./device"));
router.use("/dashboard", require("./dashboard"));
router.use("/system", require("./system"));
router.use("/communication", require("./communication"));
router.use("/maintenance", require("./maintenance"));
router.use("/events", require("./events"));
router.use("/area", require("./area"));

module.exports = router;