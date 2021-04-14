const mongoose = require('mongoose');


const PermissionSchema = mongoose.Schema(
  {
    route_name: {
      type: String,
      required: true
    },
    module: {
      type: String,
      required: true
    },
    uri: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const Permission = mongoose.model('Permission', PermissionSchema);

module.exports = Permission;
