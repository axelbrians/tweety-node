import { POSTGRES_USER, POSTGRES_IP, POSTGRES_PASSWORD, POSTGRES_PORT } from './config';
import { Todo } from '../entity/Todo';
import { createConnection } from 'typeorm';

// const TypeormConnection = {
//     type: 'postgres',
//     host: `${POSTGRES_IP}`, // pg service name
//     port: POSTGRES_PORT, // port address
//     username: `${POSTGRES_USER}`, // user env at docker-compose
//     password: `${POSTGRES_PASSWORD}`, //password eng from docker-compose
//     database: 'typeorm-todolist', // default db name at pg container
//     entities: [
//         Todo
//     ]
// };

const connection = async (): Promise<void> => {
    createConnection({
        name: 'todolist',
        type: 'postgres',
        host: `${POSTGRES_IP}`, // pg service name
        port: POSTGRES_PORT, // port address
        username: `${POSTGRES_USER}`, // user env at docker-compose
        password: `${POSTGRES_PASSWORD}`, //password eng from docker-compose
        database: 'typeorm-todolist', // default db name at pg container
        entities: [
            Todo
        ]
    });
}

export default connection;