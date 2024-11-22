// backend/src/models/userModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  companyName: String,
  businessType: {
    type: String,
    enum: ['Exporter', 'Manufacturer', 'Trader', 'Distributor']
  },
  primaryMarkets: [String],
  role: {
    type: String,
    enum: ['Admin', 'User', 'SuperAdmin'],
    default: 'User'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  lastLogin: Date,
  preferences: {
    language: String,
    notifications: Boolean
  }
}, { 
  timestamps: true 
});

// Password hashing middleware
UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Password verification method
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.index({ email: 1, role: 1 });

module.exports = mongoose.model('User', UserSchema);