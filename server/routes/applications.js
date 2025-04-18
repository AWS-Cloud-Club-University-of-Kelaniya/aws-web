const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email, and password are required' });
    }

    // Hash the password (if your Application schema includes it)
    const hashedPassword = await bcrypt.hash(password, 10);

    const application = new Application({
      fullName: req.body.fullName,
      email: email,
      password: hashedPassword,
      studentId: req.body.studentId,
      faculty: req.body.faculty,
      year: req.body.year,
      contactNumber: req.body.contactNumber,
      address: req.body.address,
      emergencyContactPerson: req.body.emergencyContactPerson,
      emergencyContactNumber: req.body.emergencyContactNumber,
      interests: req.body.interests,
      linkedin: req.body.linkedin,
      github: req.body.github,
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully!' });

  } catch (err) {
    console.error('Application submission error:', err);
    res.status(400).json({ error: 'Failed to submit application', details: err.message });
  }
});

module.exports = router;

