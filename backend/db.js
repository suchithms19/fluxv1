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

const mentorFormSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'others'],
  },
  organization: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  languages: {
    type: String,
    required: true,
    trim: true,
  },
  mentoringAreas: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one mentoring area must be selected'
    }
  },
  linkedin: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  github: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const MentorForm = mongoose.model('MentorForm', mentorFormSchema);
const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

module.exports = {FormSubmission,MentorForm };