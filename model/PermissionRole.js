const mongoose = require('mongoose');

const PermissionRoleSchema = mongoose.Schema(
  {
    permissionId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Permission',
      required: true,
    },
    roleId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Role',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PermissionRole = mongoose.model('PermissionRole', PermissionRoleSchema, 'permission_roles');

module.exports = PermissionRole;
