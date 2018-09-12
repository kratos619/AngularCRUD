//import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  // users: string[];

  data: Observable<string>;
  constructor() {
    //  this.users = ['gaurav', 'saurav', 'rechal', 'chanchal'];
  }

  getUser() {
    //return this.users;
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('gaurav');
      }, 3000);
      setTimeout(() => {
        observer.next('saurav');
      }, 1000);
      setTimeout(() => {
        observer.next('sdsdd');
      }, 4000);
      setTimeout(() => {
        observer.next('sdafadda');
      }, 2000);
      setTimeout(() => {
        observer.next('dsdsdqweq');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });

    return this.data;
  }
}
