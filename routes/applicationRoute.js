const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");
const auth = require("../middlewares/auth");

router.post(
  "/add",
  auth.isAuthenticated,
  auth.authorizeRoles("Partner"),
  applicationController.add
);

router.get("/list/:trip", applicationController.list);

module.exports = router;
