const express = require('express');
const { exec } = require('child_process');
const { promisify } = require('util');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
require('dotenv').config(); // Load env variables from file

const execAsync = promisify(exec);
const app = express();
const port = process.env.PORT || 3000; // Use env variable for port, default is 3000

// CORS options for production
const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || '*', // Specify allowed origin or allow all
};
app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 200, // Limit to 500 requests per minute
});
app.use(limiter);

// HTTP request logging
app.use(morgan('combined'));

app.get('/getReport', async (req, res) => {
  const { id } = req.query; // Get id from query params

  // Input validation with regex
  if (!id || typeof id !== 'string' || !id.match(/^\d+$/)) {
    return res.status(400).send('Invalid ID provided.');
  }

  try {
    const { stdout } = await execAsync(`python3 generateReport.py ${id}`);
    const data = JSON.parse(stdout);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    if (error.code === 'ENOENT') {
      return res.status(500).send('Error executing Python script. Make sure it exists and is executable.');
    }
    return res.status(500).send('Server error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Starlink Telemetry Report API running at http://localhost:${port}`);
});

