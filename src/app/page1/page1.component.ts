import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../model/Book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit, OnDestroy{

  pageName = 'Page 1';
  books: Array<Book>;
  dataService: DataService;
  numberOfBooksWrittenByMatt: number;

  subscription: Subscription;
  subscription2: Subscription;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.books = new Array<Book>();
    this.numberOfBooksWrittenByMatt = 0;
    this.subscription = new Subscription();
    this.subscription2 = new Subscription();
  }

  ngOnInit() {
    setTimeout( () => { this.pageName = 'First page'}, 5000 );
    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter(it => it.author === 'matt').length;
    this.subscription = this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if(newBook.author === 'matt') {
          this.numberOfBooksWrittenByMatt++;
        }
      },
      (error) => {
        console.log('an error occured', error);
      },
      () => {
        // complete event.
      }
    );

    this.subscription2 = this.dataService.bookDeletedEvent.subscribe(
      (book) => {
        if(book.author === 'matt') {
          this.numberOfBooksWrittenByMatt--;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onButtonClick() {
    alert('hello - the date today is ' + new Date());
  }
}
