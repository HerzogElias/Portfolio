import { Component, Input } from '@angular/core';
import { Projekt } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-single-project',
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input()  project:Projekt= {
    projectname: 'sharky',
    content: {
      abouttheporject: 'Hier steht so zimlich alles was dem POrjekt zugute Kommt',
      oranisation: 'Scrum macht alles möglich',
      whatilerned: 'To oraganise a project with scrum'

    },
    technologies: 'Bild 1 und bild 2',
    image: 'url to image',
    github: 'githublink',
    livetest: 'livetestlink'
  }

}
