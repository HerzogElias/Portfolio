import { Component } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";

@Component({
  selector: 'app-my-projects',
  imports: [SingleProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  selectedProject = 'Join';

  projects = [{
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
  },
  {
    projectname: 'Join',
    content: {
      abouttheproject: 'Hier steht so ziemlich alles was dem POjekt zugute kommt',
      organisation: 'Scrum macht alles möglich',
      whatilearned: 'To organise a project with scrum'
    },
    technologies: 'Bild 1 und bild 2',
    image: 'url to image',
    github: 'githublink',
    livetest: 'livetestlink'
  }
  ]

  projectnavbar: string[] = ['Join', 'Sharky']


  setSelectedProject(projectname: string) {
    this.selectedProject = projectname;
  }
}
