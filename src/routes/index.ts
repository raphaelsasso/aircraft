import { Router } from 'express';
import transactionRouter from './transaction.routes';
import seatRouter from './seat.routes';
import bookRouter from './book.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
routes.use('/seat', seatRouter);
routes.use('/book', bookRouter);

export default routes;
