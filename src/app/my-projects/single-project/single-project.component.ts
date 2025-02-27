import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projekt } from '../../interfaces/projects.interface';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project: Projekt = {
    projectname: 'sharky',
    content: {
      aboutTheProject: 'Hier',
      organisation: 'Scrum macht alles möglich',
      whatILearned: 'To organise a project with Scrum'
    },
    technologies: ['Bild 1', 'Bild 2'],
    images: ['url-to-image'],
    github: 'githublink',
    livetest: 'livetestlink'
  };
}
