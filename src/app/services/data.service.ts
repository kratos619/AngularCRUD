import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  users: string[];
  constructor() {
    this.users = ['gaurav', 'saurav', 'rechal', 'chanchal'];
  }

  getUser() {
    return this.users;
  }
}
