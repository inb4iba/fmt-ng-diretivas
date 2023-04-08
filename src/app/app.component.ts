import { Component } from "@angular/core";
import { CardProps } from "./components/card/card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  showModal = false;
  page = "Home";
  cards: CardProps[] = [
    {
      url: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0301/KSalsBYWb0IuDrdD1SbptAd6.png",
      description:
        "Tunic é um jogo de ação e aventura ambientado nas ruínas de um mundo de fantasia pós-apocalíptico, no qual o personagem sem nome do jogador, uma raposa antropomórfica, navega pelo terreno e luta contra criaturas hostis. O jogador inicialmente não recebe orientações ou instruções, e a maior parte do texto do jogo é escrita em um idioma construído, com apenas algumas palavras apresentadas no idioma selecionado pelo jogador, como o inglês. O terreno 3D é normalmente exibido a partir de uma visão isométrica, embora o ponto de vista se mova em certos pontos do jogo.",
    },
    {
      url: "https://cdn.dekudeals.com/images/ca9155937b96b519944c98858465aa3fd48f3c9b/w500.jpg",
      description:
        "Hollow Knight é um jogo de ação e aventura em estilo metroidvania 2D que se passa em Hallownest, um antigo reino fictício. O jogador controla um silencioso cavaleiro enquanto explora um mundo subterrâneo. O cavaleiro utiliza uma arma pontiaguda, tanto em combate quanto para interação com o ambiente.",
    },
    {
      url: "https://assets1.ignimgs.com/2017/04/26/the-witness---button-f-1493235698405.jpg",
      description:
        "The Witness é um jogo de quebra-cabeça e aventura visto a partir de uma perspectiva em primeira pessoa. O jogador explora uma ilha que possui inúmeras estruturas e formações naturais. Ela é dividida em onze seções ao redor de uma montanha que representa o objetivo final do jogador.",
    },
    {
      url: "https://www.gamespot.com/a/uploads/square_medium/1595/15950357/3878053-celeste.png",
      description:
        "Celeste é um jogo de plataforma no qual os jogadores controlam uma garota chamada Madeline enquanto ela sobe em uma montanha, evitando vários obstáculos mortais. Além de pular e escalar paredes por um período limitado de tempo, Madeline tem a capacidade de realizar um traço (dash, em inglês) no chão ou no meio do ar nas oito direções cardeais.",
    },
    {
      url: "https://thumbnails.pcgamingwiki.com/d/dd/Titan_Souls_cover.jpg/300px-Titan_Souls_cover.jpg",
      description:
        "Titan Souls é um jogo de ação e aventura com elementos estratégicos, de mundo aberto, gráficos em 2D e perspectiva de cima para baixo, onde o jogador possui apenas uma flecha e morre ao ser atingido apenas uma vez.",
    },
  ];
}
