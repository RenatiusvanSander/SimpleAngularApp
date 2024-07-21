import { Injectable } from '@angular/core';
import { Book } from './model/Book';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  books: Array<Book>

  constructor() { 
    this.books = new Array<Book>();

    const book1 = new Book();
    book1.title = 'First book';
    book1.author = 'First author';
    book1.price = 456;
    this.books.push(book1);

    const book2 = new Book();
    book2.title = 'Second book';
    book2.author = 'Second author';
    book2.price = 457;
    this.books.push(book2);

    const book3 = new Book();
    book3.title = 'Third book';
    book3.author = 'Third author';
    book3.price = 458;
    this.books.push(book3);
  }


}
