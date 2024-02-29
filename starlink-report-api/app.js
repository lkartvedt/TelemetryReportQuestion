const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/getReport', (req, res) => {
  const { id } = req.query; // Get id from query parameters

  exec(`python_script.py ${id}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send('Error executing Python script');
    }

    try {
      const data = JSON.parse(stdout);
      res.json(data);
    } catch (parseError) {
      console.error(`Error parsing script output: ${parseError}`);
      res.status(500).send('Error parsing script output');
    }
  });
});

app.listen(port, () => {
  console.log(`Starlink Telemetry Report API running at http://localhost:${port}`);
});
