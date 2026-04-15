const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the basic Node.js backend!'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
