import { Component, Input } from "@angular/core";

export interface CardProps {
  url: string;
  description: string;
}

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() props: CardProps = {
    url: "",
    description: "",
  };
}
