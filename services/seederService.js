const roleData = require('../seeder/role.json');
const _ = require('lodash');
const Permission = require('../model/Permission');
const Role = require('../model/role');
const Permission_Role = require('../model/PermissionRole');
async function initRoleAndSuperAdminPermission() {

    _.map(roleData, async (data) => {
        let result = await Role.findOne({ code: data.code });
        if (!result) {
            await Role.create(data);
        }

    })

}

module.exports = { initRoleAndSuperAdminPermission };
