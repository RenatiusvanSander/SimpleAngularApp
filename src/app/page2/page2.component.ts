import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit {

  hits = 0;

  constructor() {}

  ngOnInit(): void {
  }

  incrementHitCounter() {
    this.hits++;
  }
}
