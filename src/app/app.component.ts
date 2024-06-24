import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleAngularApp';

  @ViewChild('footer')
  footerComponent!: FooterComponent;

  updateLastAccessed() {
    console.log('the previous last accessed value was ' + this.footerComponent.lastAccessed);
    this.footerComponent.lastAccessed = new Date().toString();
  }
}
