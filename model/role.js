const mongoose = require('mongoose');
const RoleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;
