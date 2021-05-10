import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GetlocationModule } from '@projects/getlocation';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GetlocationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
