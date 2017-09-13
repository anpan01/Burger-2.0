# Devoure the Burger
A full stack app that interacts with the server and database.

### [Demo Me Here!](https://guarded-sierra-71872.herokuapp.com/)

### How it works

* Devour the Burger!!!! is an app that lets users input the names of burgers they'd like to devoure. 

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour!` button. When the user clicks it, the burger will move to the right side of the page; showing record that the burger has been devoured.

### Technologies:
* Server - Node.js, Express framework
* Database - MySql
* Client - Express-handlebars, HTML, CSS
* Npm modules: express, mysql, express-handlebars, body-parser, path, method-overide

### Challenges faced

* Abiding to Handlebars docs
* How to get it to work on heroku, transitioning from local host to heroku.

### Solution:

* Constant referral to the Handlebars docs and overstackflow provided the necessary information. 
* Found the appropriate code for connection.js to launch website on Heroku on OverstackFlow.

* The app will store every burger in a mysql database, whether devoured or not.

![site preview](https://github.com/An26/Burger-2.0/blob/master/public/assets/img/Screen%20Shot%202017-09-13%20at%2011.24.52%20AM.png)

### MVC Directory structure:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


#### Developed by An Huynh :)
