const router = require('./routes/index');

const config = require('./config');
const express = require('express');
const app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

