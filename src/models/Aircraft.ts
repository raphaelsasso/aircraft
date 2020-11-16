import { uuid } from 'uuidv4';

class Aircraft {
  id: string;

  type: string;

  sits: number;

  rows: number;

  rowArrangement: string[];

  constructor({ type, sits, rows, rowArrangement }: Omit<Aircraft, 'id'>) {
    this.id = uuid();
    this.type = type;
    this.sits = sits;
    this.rows = rows;
    this.rowArrangement = rowArrangement;
  }
}

export default Aircraft;
