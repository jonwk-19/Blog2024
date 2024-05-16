'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js';
import userRoutes from '../src/modules/user/user.routes.js';
import authRoutes from '../src/auth/auth.routes.js';
import commentRoutes from '../src/modules/comment/comment.routes.js';
import proyectRoutes from '../src/modules/proyect/proyect.routes.js';
import skillRoutes from '../src/modules/skill/skill.routes.js';
import expRoutes from '../src/modules/exp/exp.routes.js';

class Server {
    constructor() {
        this.notes();
        this.app = express();
        this.port = process.env.PORT;
        const basePath = '/blog/v1'; // Define the base path as a variable
    
        // Define paths relative to the base path
        this.userPath = basePath + '/user';
        this.authPath = basePath + '/auth';
        this.proyectPath = basePath + '/proyect';
        this.skillPath = basePath + '/skill';
        this.expPath = basePath + '/exp';
        this.commentPath = basePath + '/comment';
    
        this.middlewares(); // Configure application middleware
        this.conectarDB(); // Establish database connection
        this.routes(); // Configure application routes
    }
    

    // Conecta a la base de datos MongoDB
    async conectarDB() {
        await dbConnection();
    }

    // Configura los middleware de la aplicación
    middlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    // Configura las rutas de la aplicación
    routes() {
        this.app.use(this.userPath, userRoutes);
        this.app.use(this.authPath, authRoutes);
        this.app.use(this.proyectPath, proyectRoutes);
        this.app.use(this.commentPath, commentRoutes);
        this.app.use(this.skillPath, skillRoutes);
        this.app.use(this.expPath, expRoutes);
        
    }

    // Inicia el servidor y escucha en el puerto especificado
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port ', this.port);
        });
    }

    notes() {
        console.log('');
        console.log('');
        console.log('NOTE: Server constructor called!');
        console.log('if port 8080 is in use:');
        console.log('netstat -ano | findstr :10433');
        console.log('taskkill /PID <PID> /F');
        console.log('');
    }
}

export default Server;