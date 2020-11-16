import AircraftRepository from './AircraftRepository';

import Seat from '../models/Seat';

class SeatRepository {
  private aircraftRepository: AircraftRepository;

  private seats: Seat[];

  constructor() {
    this.aircraftRepository = new AircraftRepository();
    this.seats = this.getAircraftSeats();
  }

  public all(): Seat[] {
    return this.seats;
  }

  private getAircraftSeats(): Seat[] {
    const aircraft = this.aircraftRepository.get();

    const seats: Seat[] = [];
    aircraft.rowArrangement.forEach((rowLetter, index) => {
      if (rowLetter !== '_') {
        const isFirstLetter = index === 0;
        const isLastLetter = aircraft.rowArrangement.length - 1 === index;
        const isWindow = isFirstLetter || isLastLetter;

        for (let rowNumber = 1; rowNumber <= aircraft.rows; rowNumber += 1) {
          let nextLetter: string | null = aircraft.rowArrangement[0];
          if (!isLastLetter) {
            const nextRowLetter = aircraft.rowArrangement[index + 1];
            if (nextRowLetter === '_') {
              nextLetter = aircraft.rowArrangement[index + 2];
            } else {
              nextLetter = nextRowLetter;
            }
          }

          let nextNumber: number | null = isLastLetter
            ? rowNumber + 1
            : rowNumber;

          if (nextNumber > aircraft.rows) {
            nextLetter = null;
            nextNumber = null;
          }

          const seat = new Seat({
            letter: rowLetter,
            number: rowNumber,
            isAvailable: true,
            isWindow,
            nextLetter,
            nextNumber,
          });

          seats.push(seat);
        }
      }
    });
    this.seats = seats;
    return seats;
  }
}

export default SeatRepository;
