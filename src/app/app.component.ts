import { Component, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'SimpleAngularApp';

  @ViewChild('footer')
  footerComponent!: FooterComponent;

  @ViewChild('page2')
  page2Component!: Page2Component;

  startTime!: string;

  currentPage = 1;

  updateLastAccessed() {
    console.log('the previous last accessed value was ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  incrementHitCounter(page:number) {
    this.currentPage = page;
    console.log('hiz');
    if( page === 2) {
      console.log('executed hit counter');
      this.page2Component.incrementHitCounter();
    }
  }
}
