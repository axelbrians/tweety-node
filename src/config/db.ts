import { Pool } from "pg"; 
import { POSTGRES_USER, POSTGRES_IP, POSTGRES_PASSWORD, POSTGRES_PORT } from './config';


const pool = new Pool({
    user: `${POSTGRES_USER}`, // user env at docker-compose
    host: `${POSTGRES_IP}`, // pg service name
    database: 'tweety', // default db name at pg container
    password: `${POSTGRES_PASSWORD}`, //password eng from docker-compose
    port: POSTGRES_PORT, // port address
});

export default pool;