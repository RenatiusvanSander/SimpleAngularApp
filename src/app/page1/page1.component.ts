import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit{

  pageName = 'Page 1';
  books: Array<Book>;
  dataService: DataService;
  numberOfBooksWrittenByMatt: number;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.books = new Array<Book>();
    this.numberOfBooksWrittenByMatt = 0;
  }

  ngOnInit() {
    setTimeout( () => { this.pageName = 'First page'}, 5000 );
    this.books = this.dataService.books;
    this.numberOfBooksWrittenByMatt = this.books.filter(it => it.author === 'matt').length;
    this.dataService.bookAddedEvent.subscribe(
      (newBook) => {
        if(newBook.author === 'matt') {
          this.numberOfBooksWrittenByMatt++;
        }
      },
      (error) => {
        // do something here
      }
    );
  }

  onButtonClick() {
    alert('hello - the date today is ' + new Date());
  }
}
