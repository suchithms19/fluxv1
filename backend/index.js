const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const FormSubmission = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)

// API Routes
app.post('/api/submitform', async (req, res) => {
  try {
    const { email, source, otherSource } = req.body;

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Validate source
    if (!source || !['linkedin', 'instagram', 'twitter', 'facebook', 'friend', 'other'].includes(source)) {
      return res.status(400).json({ error: 'Invalid source' });
    }

    // Validate otherSource if source is 'other'
    if (source === 'other' && !otherSource) {
      return res.status(400).json({ error: 'Other source must be specified' });
    }

    // Create new form submission
    const formSubmission = new FormSubmission({
      email,
      source,
      otherSource: source === 'other' ? otherSource : undefined,
    });

    // Save to database
    await formSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});