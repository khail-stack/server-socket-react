const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();



// io.on('connection', (socket) => {

//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenidos al server',
//     //     fecha: new Date()
//     // });

//     socket.on('mensaje-to-server', (data) => {

//         console.log(data);
        
//         io.emit('mensaje-from-server', data )

//     })

// });




// Socket es el cliente que se conecto