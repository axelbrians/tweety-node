import { env } from 'process';

const POSTGRES_IP = env.POSTGRES_IP || "postgres";
const POSTGRES_PORT = parseInt(env.POSTGRES_PORT ?? "5432");
const POSTGRES_USER = env.POSTGRES_USER;
const POSTGRES_PASSWORD = env.POSTGRES_PASSWORD;


export { POSTGRES_IP, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD};