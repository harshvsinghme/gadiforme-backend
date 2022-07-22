const express = require("express");
const router = express.Router();
const tripController = require("../controllers/tripController");
const auth = require("../middlewares/auth");

router.post(
  "/add",
  auth.isAuthenticated,
  auth.authorizeRoles("Client"),
  tripController.add
);

router.get(
  "/list",
  auth.isAuthenticated,
  auth.verifiedUser,
  tripController.list
);

router.put(
  "/start-by-verifying-client",
  auth.isAuthenticated,
  auth.authorizeRoles("Partner"),
  tripController.startByVerifyingClient
);
module.exports = router;
