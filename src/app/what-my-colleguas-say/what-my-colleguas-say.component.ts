import { Component } from '@angular/core';
import { RezissionComponent } from './rezission/rezission.component';
import { CommonModule } from '@angular/common';
import { Rezession } from '../interfaces/rezession.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-what-my-colleguas-say',
  imports: [RezissionComponent,CommonModule,TranslateModule],
  templateUrl: './what-my-colleguas-say.component.html',
  styleUrl: './what-my-colleguas-say.component.scss'
})
export class WhatMyColleguasSayComponent {
rezessions:Rezession[] = [
{
    name:'whatMyColleguasSay.teamPlayer.florian.name',
    projekt: 'whatMyColleguasSay.teamPlayer.florian.project',
    rezession: 'whatMyColleguasSay.teamPlayer.florian.feedback', 
    linkedin: "https://www.linkedin.com/in/florian-zunke-b18420328/"
  },
  {
    name:'whatMyColleguasSay.teamPlayer.kai.name',
    projekt: 'whatMyColleguasSay.teamPlayer.kai.project',
    rezession: 'whatMyColleguasSay.teamPlayer.kai.feedback', 
    linkedin: "https://www.linkedin.com/in/kai-schulz-53207b1a6/"
  }
]

}
