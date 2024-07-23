import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../model/Book';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  @Input()
  lastAccessed = '';

  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {}

  addABook() {
    const book: Book = new Book();
    book.author = 'matt';
    book.title = 'Man in the mirror';
    book.price = 23.45;
    this.dataService.addBook(book);
  }
}
