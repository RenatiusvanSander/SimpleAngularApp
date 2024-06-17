import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor() {}

  pageRequested:number = 1;

  ngOnInit() {
    
  }

  onPageChange(page:number) {
    this.pageRequested = page;
    console.log(this.pageRequested);
  }
}
