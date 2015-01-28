# twee-socket-extension

![Twee.io Logo](https://raw.githubusercontent.com/tweeio/twee-framework/master/assets/68747470733a2f2f73332e65752d63656e7472616c2d312e616d617a6f6e6177732e636f6d2f6d657368696e2f7075626c69632f747765652e696f2e706e67.png)

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/tweeio/twee-framework?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/tweeio/twee-framework)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/tweeio/twee-framework)

Socket.io Support for Twee.io Framework - MVC Framework for Node.js and io.js based on Express.js.

To install it use this command:

```
npm install twee-socket-extension --save
```


Editing `package.json` of your application:

```
"dependencies": {
    "twee-socket-extension": "*"
}
```

Turning extension `ON` in `application/configs/twee.js`:

```
module.exports = {
    "extensions": {
        "Sockets": {
            "module": "twee-socket-extension"
        }
    }
};
```

Example of usage in `modules/Default/controllers/DefaultController.js`:

```
"use strict";

/**
* @type Object Default Controller
*/
module.exports = function () {
    /**
    * Main Page
    *
    * @param req
    * @param res
    */
    this.indexAction = function (req, res) {
        var self = this;

        res.render('Default/views/pages/Default/index');

        // Using sockets here.
        // Or we can use them before render
        // (not optimized for UI responsiveness)
        twee.socketServer.on('connect', function(socket){
            socket.emit('chat message', 'Hello from socket callback!');
        });
    };
};
```
