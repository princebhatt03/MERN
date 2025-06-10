const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/weather/:city', (req, res) => {
  const city = req.params.city.toLowerCase();

  fs.readFile('./api.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read local data' });
    }

    try {
      const weatherData = JSON.parse(data);
      const result = weatherData.find(item => item.city.toLowerCase() === city);

      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'City not found in local data' });
      }
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to parse JSON data' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
