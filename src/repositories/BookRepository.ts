import SeatRepository from './SeatRepository';

import Book from '../models/Book';
import Seat from '../models/Seat';

interface CreateBook {
  passagerName: string;
  numberOfSeatsToBooks: number;
}

interface CurrentSeat {
  letter: string | null;
  number: number | null;
}

interface SeatBooked {
  id: string;
  letter: string;
  number: number;
}

class BookRepository {
  private seatRepository: SeatRepository;

  private books: Book[];

  private seats: Seat[];

  constructor() {
    this.seatRepository = new SeatRepository();
    this.books = [];
    this.seats = this.seatRepository.all();
  }

  public all(): Book[] {
    return this.books;
  }

  public getSeats(): Seat[] {
    return this.seats;
  }

  public create({ passagerName, numberOfSeatsToBooks }: CreateBook): Book {
    const seats = this.seatRepository.all();

    const passagerSits: SeatBooked[] = [];

    const currentSeat: CurrentSeat = {
      letter: 'A',
      number: 1,
    };

    let bookedSeats = 0;

    while (bookedSeats < numberOfSeatsToBooks) {
      const findCurrentSeat = ({
        letter,
        number,
      }: CurrentSeat): number | boolean =>
        letter === currentSeat.letter && number === currentSeat.number;

      const currentSeatIndex = seats.findIndex(findCurrentSeat);

      if (
        seats[currentSeatIndex].nextLetter === null ||
        seats[currentSeatIndex].nextNumber === null
      ) {
        break;
      }

      if (seats[currentSeatIndex].isAvailable) {
        passagerSits.push({
          id: seats[currentSeatIndex].id,
          letter: seats[currentSeatIndex].letter,
          number: seats[currentSeatIndex].number,
        });

        seats[currentSeatIndex].isAvailable = false;

        currentSeat.letter = seats[currentSeatIndex].nextLetter;
        currentSeat.number = seats[currentSeatIndex].nextNumber;
        bookedSeats += 1;
      } else {
        currentSeat.letter = seats[currentSeatIndex].nextLetter;
        currentSeat.number = seats[currentSeatIndex].nextNumber;
      }
    }

    const book = new Book({
      passagerName,
      seats: passagerSits,
    });

    this.books.push(book);

    return book;
  }
}

export default BookRepository;
