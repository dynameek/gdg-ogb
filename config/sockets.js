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
                this.io.emit('add-post', data);
            })
        });
    }
}

module.exports = sockets;