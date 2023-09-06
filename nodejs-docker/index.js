const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('/status', (req, res) => {
  res.json({ message: 'online' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});