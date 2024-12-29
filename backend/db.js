const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  source: {
    type: String,
    required: true,
    enum: ['linkedin', 'instagram', 'twitter', 'facebook', 'friend', 'other'],
  },
  otherSource: {
    type: String,
    trim: true,
    required: function() {
      return this.source === 'other';
    },
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

module.exports = FormSubmission;