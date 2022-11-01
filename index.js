const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Siera Driver');
})

app.listen(port, () => {
  console.log(`Siera Driver base app listening on port ${port}`);
})