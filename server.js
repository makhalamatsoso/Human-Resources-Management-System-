require('dotenv').config();  // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const staffRoutes = require('./routes/staffRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const app = express();

// Log the MONGO_URI to verify it's being read
console.log('Mongo URI:', process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/staff', staffRoutes);
app.use('/vehicles', vehicleRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});
app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
});


// Start the server
const port = process.env.PORT || 4000; 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
