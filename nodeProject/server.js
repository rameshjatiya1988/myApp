'use strict';

const Hapi = require('hapi');
const BasicAuth = require('hapi-auth-basic');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-iauro-swaggered');
const fs = reqire('fs');
const mongoose = require('mongoose');
const routes = require('./Src/Routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/user');


// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 8000 ,
    routes : {
        cors: {
            origin: ['*'],

        },
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    },
    tls: {
        cert: fs.readFileSync('/var/www/html/myApp/nodeProject/fullChain.pem'),
        key: fs.readFileSync('/var/www/html/myApp/nodeProject/privKey.pem')
    }

});

const options = {
    info: {
        'title': 'Test API Documentation',
        'version': '1.0',
    },
};


server.register(
    [
        Inert,
        Vision,
        {
            'register': HapiSwagger,
            'options': options
        }
        ], function (err) {

        if(!err) {
            server.route(routes);
            // server.route({
            //     method: 'GET',
            //     path: '/{param*}',
            //     handler: {
            //         directory: {
            //             path: '.',
            //             redirectToSlash: true,
            //             index: true
            //         }
            //     },
            //     config: {cors: true  }
            // });
            start();
        }
    });


// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log("error",err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

