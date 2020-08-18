define({ "api": [
  {
    "type": "get",
    "url": "/admin",
    "title": "Ingredients whose available quantity is less than the threshold quantity,Food with costOfProduction higher than selling cost,Ingredients provided by same vendor",
    "name": "admin",
    "group": "admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "admin"
  },
  {
    "type": "put",
    "url": "/admin",
    "title": "change user status to activate or deactivate user",
    "name": "admin",
    "group": "admin",
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "admin"
  },
  {
    "type": "get",
    "url": "/food",
    "title": "list all food",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/Food.js",
    "groupTitle": "food"
  },
  {
    "type": "get",
    "url": "/food/add",
    "title": "Display form to add food",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/Food.js",
    "groupTitle": "food"
  },
  {
    "type": "post",
    "url": "/food",
    "title": "add food to database",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/Food.js",
    "groupTitle": "food"
  },
  {
    "type": "get",
    "url": "/food/:id/edit",
    "title": "Edit food",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/Food.js",
    "groupTitle": "food"
  },
  {
    "type": "put",
    "url": "/food/:id",
    "title": "Update food",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/Food.js",
    "groupTitle": "food"
  },
  {
    "type": "delete",
    "url": "/food/:id/",
    "title": "Delete food",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/Food.js",
    "groupTitle": "food"
  },
  {
    "type": "get",
    "url": "/order/:id/new",
    "title": "Order food",
    "name": "food",
    "group": "food",
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "food"
  },
  {
    "type": "post",
    "url": "/order/:id",
    "title": "create Order for food",
    "name": "order",
    "group": "order",
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/order/:id/edit",
    "title": "edit Order",
    "name": "order",
    "group": "order",
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "put",
    "url": "/order/:id/",
    "title": "Update Order",
    "name": "order",
    "group": "order",
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "delete Order",
    "name": "order",
    "group": "order",
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Display user orders and user information",
    "name": "user",
    "group": "user",
    "version": "0.0.0",
    "filename": "routes/userprofile.js",
    "groupTitle": "user"
  },
  {
    "type": "put",
    "url": "/user",
    "title": "change user passsword",
    "name": "user",
    "group": "user",
    "version": "0.0.0",
    "filename": "routes/userprofile.js",
    "groupTitle": "user"
  }
] });
