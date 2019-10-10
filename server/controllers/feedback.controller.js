var feedbackService = require("../services/feedback.service");

var feedback = async (req, res) => {
  var params = {
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  };

  const missingFieldResponse = field => res.status(401).json({
    "success": 0,
    "message": `field '${field}' is required`
  });

  if (!params.email) {
    return missingFieldResponse('email');
  }
  if (!params.subject) {
    return missingFieldResponse('subject');
  }
  if (!params.message) {
    return missingFieldResponse('message');
  }

  try {
    var info = await feedbackService.sendFeedback(params);
  } catch (error) {
    return res.status(400).json({
      "success": 0,
      "message": "failed to send feedback",
      error
    });
  }

  res.json({
    "success": 1,
    "message": "message sent successfully"
  })

}

module.exports = {
  feedback
}
