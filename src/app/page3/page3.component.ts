import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component implements OnInit{

  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  deleteLastBook() {
    this.dataService.deleteBook();
  }

  ngOnInit() {

  }
}
