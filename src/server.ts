import express, { Application, Request, Response } from "express";
import TodoRoutes from './routes/TodoRoutes';
// import { authRoutes } from './routes/AuthRoutes';
import pgConnection from "./config/connection";



class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
    }

    private config() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    private routerConfig() {
        // this.app.use('/api/v1/auth', authRoutes);

        // localhost:3000/api/v1/todos
        this.app.use('/api/v1/todos', TodoRoutes);

        this.app.get('/', (req: Request, res: Response) => {
            res.send('docker-compose with typescript and typeorm');
        });
    }

    async start(port: number): Promise<unknown> {
        return new Promise((resolve, reject) => {
            const connection = pgConnection();
            connection.catch((err) => reject(err));

            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: unknown) => reject(err));
        })
    }
}

export default Server;