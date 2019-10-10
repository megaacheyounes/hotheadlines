var router = require('express').Router();
var feedbackController = require('./controllers/feedback.controller');

router.post('/feedback', feedbackController.feedback);

module.exports = router;
