import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  iconsFrondend:string[] =
  [
    '/img/myskills/angular.png',
    '/img/myskills/typescript.png',
    '/img/myskills/javascript.png',
    '/img/myskills/html.png',
    '/img/myskills/css.png',
    '/img/myskills/api.png',
    '/img/myskills/firebase.png',
    '/img/myskills/git.png',
    '/img/myskills/material.png',
    '/img/myskills/scrum.png'
  ]
}

