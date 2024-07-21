import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component implements OnInit{

  pageName = 'Page 1';
  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService
  }

  ngOnInit() {
    setTimeout( () => { this.pageName = 'First page'}, 5000 );
  }

  onButtonClick() {
    alert('hello - the date today is ' + new Date());
  }
}
