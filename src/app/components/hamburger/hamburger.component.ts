import { Component } from "@angular/core";

@Component({
  selector: "hamburger",
  templateUrl: "./hamburger.component.html",
  styleUrls: ["./hamburger.component.scss"],
})
export class HamburgerComponent {
  isHamburgerOpen = false;
}
