import { uuid } from 'uuidv4';

interface SeatBooked {
  id: string;
  letter: string;
  number: number;
}

class Book {
  id: string;

  passagerName: string;

  seats: SeatBooked[];

  constructor({ passagerName, seats }: Omit<Book, 'id'>) {
    this.id = uuid();
    this.passagerName = passagerName;
    this.seats = seats;
  }
}

export default Book;
