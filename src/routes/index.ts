import express, {Response, Request} from 'express'
import log from './../logger/index';

const router = express();

router.get('/', (req: Request, res: Response) => {
    log.trace({
        username: 'zahid'
    });
    res.json('hello')
});

export default router;