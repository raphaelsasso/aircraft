import { Router } from 'express';

import BookRepository from '../repositories/BookRepository';

const bookRouter = Router();

const bookRepository = new BookRepository();

bookRouter.get('/', (request, response) => {
  try {
    const books = bookRepository.all();

    return response.json({ books });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

bookRouter.get('/seats', (request, response) => {
  try {
    const seats = bookRepository.getSeats();

    return response.json({ seats });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

bookRouter.post('/', (request, response) => {
  try {
    const { name, sits } = request.body;

    const book = bookRepository.create({
      passagerName: name,
      numberOfSeatsToBooks: sits,
    });

    return response.json(book);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default bookRouter;
