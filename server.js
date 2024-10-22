const express = require('express');
const sequelize = require('./utils/db');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const fileRoutes = require('./routes/file');
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/files', fileRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
