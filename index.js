/**
 * Socket Support Integration
 */
module.exports.extension = function() {
    "use strict";

    twee.once('twee.createServer.End', function(){
        if (twee.getConfig('twee:options:useHTTPS') && twee.getConfig('twee:extension:twee-socket:useHTTPS')) {
            twee.socketServer = require('socket.io')(twee.getHttpsServer());
        } else {
            twee.socketServer = require('socket.io')(twee.getHttpServer());
        }
    });
};

module.exports.configNamespace = 'twee-socket';

module.exports.config = {
    "useHTTPS": true
};
