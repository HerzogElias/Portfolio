import { Component } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { CommonModule } from '@angular/common';
import { Projekt } from '../interfaces/projects.interface';


@Component({
  selector: 'app-my-projects',
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})


export class MyProjectsComponent {
  projects: Projekt[] = [{
    projectname: 'Join',
    content: {
      aboutTheProject: 'Hier steht so ziemlich alles was dem POjekt zugute kommt',
      organisation: 'Scrum macht alles möglich',
      whatILearned: 'To organise a project with scrum'
    },
    technologies: [],
    images: [],
    github: 'githublink',
    livetest: 'livetestlink'
  },
  {
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
  }
  ]

  activeProject = this.projects[0];

  projectnavbar: string[] = ['Join', 'Sharky']


  changeIndex(index: number) {
    this.activeProject = this.projects[index];
  }
}
