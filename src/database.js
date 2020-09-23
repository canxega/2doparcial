const mongoose = require('mongoose');

const MONGODB_URL = `mongodb://localhost/segundoparcial`;

mongoose
  .connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log('Database is connected'))
  .catch((err) => console.log(err));

