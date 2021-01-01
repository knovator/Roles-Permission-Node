const { initRoleAndSuperAdminPermission } = require('../services/seederService');
function initSeed() {
    Promise.all([        
        initRoleAndSuperAdminPermission(),
    ]).then(() => {

    });
}

module.exports = initSeed;
