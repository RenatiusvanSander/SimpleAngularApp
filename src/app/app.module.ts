import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { HeaderComponent } from './header/header.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HeaderComponent,
    Page2Component,
    Page3Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: 'DataServiceInterface', useClass : DataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
