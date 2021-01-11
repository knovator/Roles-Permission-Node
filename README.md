# role and permissions in express js with mongodb
## Table of contents

[installation](https://www.npmjs.com/package/roles-and-permission-node#installation)

[set .env file](https://www.npmjs.com/package/roles-and-permission-node#set-.env-file)

[Store Routes](https://www.npmjs.com/package/roles-and-permission-node#Store-Routes)

[How to registered routes in express](https://www.npmjs.com/package/roles-and-permission-node#How-to-registered-routes-in-express)

[Create Middleware](https://www.npmjs.com/package/roles-and-permission-node#Create-Middleware)

[Get the all Roles](https://www.npmjs.com/package/roles-and-permission-node#Get-the-all-Roles)

[create new Role](https://www.npmjs.com/package/roles-and-permission-node#create-new-Role)

[edit role](https://www.npmjs.com/package/roles-and-permission-node#Edit-role)

[delete Role](https://www.npmjs.com/package/roles-and-permission-node#delete-Role)

[Assign the permission to another role](https://www.npmjs.com/package/roles-and-permission-node#Assign-the-permission-to-another-role)

[Get the role permission](https://www.npmjs.com/package/roles-and-permission-node#Get-the-role-permission)

[Get Permission of role](https://www.npmjs.com/package/roles-and-permission-node#Get-Permission-of-role)


## installation

        This is a Node.js module available through the npm registry.

        This Package is only for mongoDB 
  
        Node.js 0.10 or higher is required.

        Installation is done using the npm install command:

        $ npm install roles-and-permission-node


this package is generate three table automatically

1.roles

2.permission

3.permission-role

all permissions are assign to super admin automatically.

## Set .env file

```
DB_CONNECTION=mongodb
DB_HOST=localhost
DB_PORT=27017
DB_DATABASE=knovator

```

## Store all routes

```
const { store } = require('roles-and-permission-node');
const express = require('express');
var api = require('express-list-endpoints-descriptor')(express);
const app = express();

const routes = require('./routes');

//api routes
app.use('/api', routes);

store(api.listEndpoints(app));

```


## How to registered routes in express

```
const express = require('express');
const routes = express.Router({ strict: true });

routes.route('/').get((req, res) => {
    res.send('ok in api')
}).descriptor('setting.get');

routes.route('/').put((req, res) => {
    res.send('ok in api')
}).descriptor('setting.update');

routes.route('/').post((req, res) => {
    res.send('ok in api')
}).descriptor('setting.create');

routes.route('/update/:id').get((req, res) => {
    res.send('ok in api')
}).descriptor('setting.show');

module.exports = routes;

```

## Create Middleware

```
const { permit } = require('roles-and-permission-node');

async function auth(req, res, next) {
        auth...

        //add roleIds into req object
        
        req.roleIds = ["5fec604cd88d5b57ccfc8561", "5fec604cd88d5b57ccfc8562"]
        next();

};
async function checkPermission(req, res, next) {
    try {
        const result = await permit(req)
        if (result) {
            next();
        } else {
            return res.status(403).send({ message: 'Unauthorized permission !' });
        }
    }
    catch (err) {
        console.log(err);
    }

};
module.exports = {
    auth: auth,
    checkPermission: checkPermission
}

```

## Get the all Roles

```
const { getRole } = require('roles-and-permission-node');

console.log(await getRole())

```

## create new Role 

```
const { createRole } = require('roles-and-permission-node');

const data = {
        name: "test",
        code: "TESTER",
        weight: 3
    }

console.log(await createRole(data))

```
## Edit role

```
const { editRole } = require('roles-and-permission-node');
const data = {
    id: "5ffc312839e95643781f933e",
    name: "test",
    code: "ADMIN",
    weight: 3
}
console.log(await editRole(data))
```
## delete Role

```
const { deleteRole } = require('roles-and-permission-node');

you have to pass the id of role 

    ## you can't delete the super admin role

const id=roleId

console.log(await createRole(id))

```

## Assign the permission to another role

```

const { createOrUpdatePermission } = require('roles-and-permission-node');

const permissions: [
             {
                 "roleId": 3,
                 "permissionId": 1
             },
             {
                 "roleId": 3,
                 "permissionId": 2
             },
         ]

await createOrUpdatePermission(roleId,permissions);
        
```

## Get the role permission
```
const { permissionRole } = require('roles-and-permission-node');

const roleid = 5ffbda31f87d4b7e3ac82984"
console.log(await permissionRole(roleid));

```

## Get Permission of role 

```
const { rolePermissions } = require('roles-and-permission-node');

 const codes = ['SUPER_ADMIN','ADMIN'];
 console.log(await rolePermissions(codes));
  
```