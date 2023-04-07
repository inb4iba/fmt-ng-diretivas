import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HamburgerComponent } from "./components/hamburger/hamburger.component";
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, HamburgerComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
