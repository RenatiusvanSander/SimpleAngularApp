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

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.books = new Array<Book>();
  }

  ngOnInit() {
    setTimeout( () => { this.pageName = 'First page'}, 5000 );
    this.books = this.dataService.books;
  }

  onButtonClick() {
    alert('hello - the date today is ' + new Date());
  }
}
