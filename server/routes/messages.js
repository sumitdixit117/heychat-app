const {
  addMessage,
  getMessages,
  deleteMessages,
} = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post("/delmsg/", deleteMessages);

module.exports = router;
