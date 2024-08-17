import { EventEmitter } from "@angular/core";
import { Book } from "../model/Book";
import { DataServiceInterface } from "../data.service";

export class MockDataService implements DataServiceInterface{
    books = new Array<Book>();
    bookAddedEvent = new EventEmitter<Book>();
    bookDeletedEvent = new EventEmitter<Book>();
    deleteBook(): void {}
    addBook(book: Book) {
        this.bookAddedEvent.emit(book);
    }
}