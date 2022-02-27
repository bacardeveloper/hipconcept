import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  texte = `Développeur et graphiste mahorais se reunissent pour imaginer, prototyper
   et répondre aux besoins de nos clients. Imaginez ce que nous pouvons faire ensemble
   avec le numérique. Cette est une phrase pour remplir cette balise. Bisou!`;
}
