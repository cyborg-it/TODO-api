import logger, { levels } from 'pino';
import dayjs from "dayjs";
import pretty from 'pino-pretty';
import dotenv from 'dotenv';
dotenv.config();

const stream = pretty({
    colorize: true,
    customPrettifiers: {
        time: () => `"time":"${dayjs().format()}"`,
    }
})

const log = logger(stream);
log.level = 'trace'

export default log;