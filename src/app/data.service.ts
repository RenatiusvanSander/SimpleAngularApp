import { EventEmitter, Injectable } from '@angular/core';
import { Book } from './model/Book';

export interface DataServiceInterface {
  books: Array<Book>
  bookAddedEvent: EventEmitter<Book>;
  bookDeletedEvent: EventEmitter<Book>;
  addBook(book: Book): void;
  deleteBook(): void;
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements DataServiceInterface{
  books: Array<Book>
  bookAddedEvent = new EventEmitter<Book>();
  bookDeletedEvent = new EventEmitter<Book>();

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

  addBook(book: Book) {
    if(book.author === 'james') {
      this.bookAddedEvent.error('Books by james are not allowed');
    } else {
      this.books.push(book);
      this.bookAddedEvent.emit(book);
    }
  }

  deleteBook() {
    if(this.books.length > 0) {
      const book = this.books.pop();
      console.log(book);
      this.bookDeletedEvent.emit(book);
    } else {
      this.bookDeletedEvent.error('Thereare no books to delete from.');
    }
  }

}
