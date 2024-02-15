import db from './config/dbConfig';
import express from 'express';
import envConfig from './config/envConfig';
import cron from 'node-cron';
import { create } from './service/userService'

const app = express();

app.use(express.json());

db.sequelize.sync({ force: true }).then(() => {
    console.log('create table sync { force: false }');
});

cron.schedule('* * * * * *', () => {
    create();
    console.log('running a task every minute');
});

app.get('/health', (_req: any, res: any) => {
    res.send('OK');
});

app.listen(envConfig.port, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;

