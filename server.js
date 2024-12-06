const express = require('express');
const mongoose = require('mongoose');
const formRoutes = require('./routes/forms');
const app = express();

mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api/forms', formRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
