/**
 *  WEB SOCKETS
**/

class sockets {
    constructor(io) {
        this.io =  io;
        this.availableUsers = '{}';
        this.engagedUsers = '{}';
    }
    listen() {
        this.io.on('connection', (socket) => {
            //
            socket.on('new-post', (data) => {
                socket.emit('add-post', data);
            })
        });
    }
}

module.exports = sockets;