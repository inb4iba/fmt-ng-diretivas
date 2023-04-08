import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HamburgerComponent } from "./components/hamburger/hamburger.component";
import { CardComponent } from "./components/card/card.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    CardComponent,
    UserFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
