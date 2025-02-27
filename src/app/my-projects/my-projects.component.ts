import { Component } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { Projekt } from '../interfaces/projects.interface';


@Component({
  selector: 'app-my-projects',
  imports: [SingleProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})


export class MyProjectsComponent {
  projects:Projekt[] = [{
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
  }
  ]

  projectnavbar: string[] = ['Join', 'Sharky']

}
