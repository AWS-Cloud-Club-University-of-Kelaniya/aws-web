const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  studentId: { type: String, required: true },
  faculty: { type: String, required: true },
  year: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  emergencyContactPerson: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  interests: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema,'aws');