import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  iconsFrontend = [
    { src: '/img/myskills/angular.png', label: 'Angular' },
    { src: '/img/myskills/typescript.png', label: 'TypeScript' },
    { src: '/img/myskills/javascript.png', label: 'JavaScript' },
    { src: '/img/myskills/html.png', label: 'HTML' },
    { src: '/img/myskills/css.png', label: 'CSS' },
    { src: '/img/myskills/api.png', label: 'REST API' },
    { src: '/img/myskills/firebase.png', label: 'Firebase' },
    { src: '/img/myskills/git.png', label: 'Git' },
    { src: '/img/myskills/material.png', label: 'Angular Material' },
    { src: '/img/myskills/scrum.png', label: 'Scrum' }
  ];

  iconsBackend = [
    { src: '/img/myskills/cd.png', label: 'CI / CD' },
    { src: '/img/myskills/cloud.png', label: 'Cloud' },
    { src: '/img/myskills/docker.png', label: 'Docker' },
    { src: '/img/myskills/flask.png', label: 'Flask' },
    { src: '/img/myskills/python.png', label: 'Python' },
    { src: '/img/myskills/linux.png', label: 'Linux' },
    { src: '/img/myskills/sec.png', label: 'IT Security' },
    { src: '/img/myskills/yaml.png', label: 'YAML' }
  ];
}
