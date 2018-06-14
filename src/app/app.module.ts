import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import './shared/rxjs-operators';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
