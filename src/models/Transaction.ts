import { uuid } from 'uuidv4';
// criação de um novo objeto da model

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  // retorna um novo objeto
  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
