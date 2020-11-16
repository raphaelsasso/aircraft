import { uuid } from 'uuidv4';

class Seat {
  id: string;

  letter: string;

  number: number;

  isWindow: boolean;

  isAvailable: boolean;

  nextLetter: string | null;

  nextNumber: number | null;

  constructor({
    letter,
    number,
    isWindow,
    isAvailable,
    nextLetter,
    nextNumber,
  }: Omit<Seat, 'id'>) {
    this.id = uuid();
    this.letter = letter;
    this.number = number;
    this.isWindow = isWindow;
    this.isAvailable = isAvailable;
    this.nextLetter = nextLetter;
    this.nextNumber = nextNumber;
  }
}

export default Seat;
