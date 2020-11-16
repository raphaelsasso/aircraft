import { Router } from 'express';

import SeatRepository from '../repositories/SeatRepository';

const seatRouter = Router();

const seatRepository = new SeatRepository();

seatRouter.get('/', (request, response) => {
  try {
    const seats = seatRepository.all();

    return response.json({ seats });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default seatRouter;
