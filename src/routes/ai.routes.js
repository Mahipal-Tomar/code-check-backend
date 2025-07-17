const express = require('express');
const aiConttroller = require('../controllers/ai.controller') 

const router = express.Router();

router.post("/get-review",aiConttroller.getReview)



module.exports = router;