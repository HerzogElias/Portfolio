import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
 projects =[{
    projectname:'sharky',
    content:{
      abouttheporject: 'Hier steht so zimlich alles was dem POrjekt zugute Kommt',
      oranisation: 'Scrum macht alles möglich',
      whatilerned: 'To oraganise a project with scrum'

    },
    technologies: 'Bild 1 und bild 2',
    image: 'url to image',
    github: 'githublink',
    livetest: 'livetestlink' 
 }]

 projectnavbar:string[]=['Join', 'Sharky']

}
