const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json()); // Parse JSON requests

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const applicationRoutes = require('./routes/applications');
app.use('/api/applications',applicationRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

