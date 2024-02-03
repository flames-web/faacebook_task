const express = require('express');
const router = express.Router();
const {postToGroups} = require('../controller/pptr');
const catchAsync = require('../services/catchAsync');


router.post('/facebook_post',catchAsync(postToGroups));


module.exports = router;