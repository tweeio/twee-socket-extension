/**
 * Socket Support Integration
 */
module.exports.extension = function() {
    "use strict";

    twee.once('twee.createServer.End', function(){
        if (twee.getConfig('twee:options:useHTTPS') && twee.getConfig('twee:extension:twee-socket:useHTTPS')) {
            twee.set('socket.io') = require('socket.io')(twee.getHttpsServer());
        } else {
            twee.set('socket.io') = require('socket.io')(twee.getHttpServer());
        }
    });
};

module.exports.configNamespace = 'twee-socket';

module.exports.config = {
    "useHTTPS": true
};
