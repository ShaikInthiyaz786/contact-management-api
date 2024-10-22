
import { DataTypes } from 'sequelize';

import { define } from '../utils/db';
import User, { hasMany } from './user';

const Contact = define('Contact', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timezone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

hasMany(Contact);
Contact.belongsTo(User);

export default Contact;
