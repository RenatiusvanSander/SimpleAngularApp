import { EventEmitter } from "@angular/core";
import { Book } from "../model/Book";
import { DataServiceInterface } from "../data.service";

export class MockDataService implements DataServiceInterface{
    bookDeletedEvent = new EventEmitter<Book>();
    deleteBook(): void {}
    books = new Array<Book>();
    bookAddedEvent = new EventEmitter<Book>();

    addBook(book: Book) {}
}