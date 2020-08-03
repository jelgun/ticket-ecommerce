import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  reason = 'Database connection error!';
  statusCode = 500;

  constructor() {
    super('Database error');
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
