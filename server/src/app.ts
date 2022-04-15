import express, { Application, Request, Response, NextFunction } from 'express';
import notFoundMiddleware from './middleware/not-found';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello')
})

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})