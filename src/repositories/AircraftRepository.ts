import Aircraft from '../models/Aircraft';

// Mocking aircraft example
class AircraftRepository {
  private aircraft: Aircraft = new Aircraft({
    type: 'short_range',
    sits: 156,
    rows: 26,
    rowArrangement: ['A', 'B', 'C', '_', 'D', 'E', 'F'],
  });

  public get(): Aircraft {
    return this.aircraft;
  }
}

export default AircraftRepository;
