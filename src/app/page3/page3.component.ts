import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { Book } from '../model/Book';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component implements OnInit, OnDestroy{

  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.subscription = new Subscription();
  }

  subscription: Subscription;

  deleteLastBook() {
    this.dataService.deleteBook();
  }

  ngOnInit() {
    this.subscription = this.dataService.bookDeletedEvent.subscribe(
      (book: Book) => {
        console.log(book.title)
        alert('The book called ' + book.title + ' was deleted.');
      },
      (error) => {
        alert('No books were deleted - the error was ' + error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
