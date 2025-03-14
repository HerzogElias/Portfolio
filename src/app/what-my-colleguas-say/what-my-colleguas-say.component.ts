import { Component } from '@angular/core';
import { RezissionComponent } from './rezission/rezission.component';
import { CommonModule } from '@angular/common';
import { Rezession } from '../interfaces/rezession.interface';

@Component({
  selector: 'app-what-my-colleguas-say',
  imports: [RezissionComponent,CommonModule],
  templateUrl: './what-my-colleguas-say.component.html',
  styleUrl: './what-my-colleguas-say.component.scss'
})
export class WhatMyColleguasSayComponent {
rezessions:Rezession[] =[
  {
    name: "Vitalij Schwab",
    projekt: "Sharky",
    rezession: "Mit Elias konnte ich immer hervorragend zusammenarbeiten.Seine strukturierte und lösungsorientierte Arbeitsweise macht jedes Projekt effizient und angenehm. Besonders das gemeinsame Debuggen und Lösen von Problemen hat immer Spaß gemacht – er bringt nicht nur Fachwissen, sondern auch eine positive Einstellung mit. Ich freue mich auf weitere Zusammenarbeit!", 
    linkedin: "https://www.linkedin.com/in/vitalij-schwab/"
  },
  {
    name: "Florian Zunke",
    projekt: "Join",
    rezession: "Elias hat während unserer Projektarbeit  komplexen und sauberen Code geschrieben, wodurch er es gut vorangebracht hat. Durch seine nette und freundliche Art war die Zusammenarbeit sehr angenehm. ", 
    linkedin: "https://www.linkedin.com/in/florian-zunke-b18420328/"
  },
  {
    name: "Kai Schulz",
    projekt: "Sharky",
    rezession: "Ich stand mit Elias in regem Austausch zu seinem Sharky Projekt. Die Absprache war stets informativ und von gegenseitiger Wertschöpfung. Wir konnten einander gut auf mögliche Verbesserungen im Code hinweisen und ich bin mit der Zusammenarbeit sehr zufrieden",
    linkedin: "https://www.linkedin.com/in/kai-schulz-53207b1a6/"
  }
]

}
