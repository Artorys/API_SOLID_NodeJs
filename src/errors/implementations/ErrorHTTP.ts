import {IErrorHTTP} from "../IErrorHTTP"

export class ErrorHTTP implements IErrorHTTP {
  message: { message: string };
  statusCode: number;

  constructor(message: string, statusCode: number) {
    this.message = { message };
    this.statusCode = statusCode;
  }
}