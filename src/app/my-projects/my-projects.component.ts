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
      aboutTheProject: 'Join hilft dir als richtiges Aufgabentool deine Aufgaben mit einem Scrum-Board zu pflegen, sowie deine Kontakte zu verwakten',
      organisation: 'Durch eine Gruppenarbeit mit 3 Personen wurden die Aufgaben mit der Hilfe eines Scrum-Board gemanaged und regelmäßige Termine gefplegt',
      whatILearned: 'Druch das Projekt erste Berührungspunkte mit Firebase erhalten und zu lernen wie man ein Projekt mit der Scrum Mehtode managed'
    },
    technologies: ['Firebase', 'CSS', 'Javascript'],
    images: ['/img/myskills/firebase.png', '/img/myskills/css.png', '/img/myskills/javascript.png'],
    github: 'github.com/herzogelias/join',
    livetest: 'join.elias-herzog.de'
  },
  {
    projectname: 'Sharky',
    content: {
      aboutTheProject: 'Mit der Hilfe von Obektorientierten Javascript wurde ein 2D Geme programmiert. Hilf den Shakry, Gift zu sammeln, um den Endboss zu töten. ',
      organisation: 'Was soll ich hier reinschreiben ich weiß es noch nicht',
      whatILearned: 'Erste Tiefgehende Erfahrungen gesammelt in die Welt der Objetorientierten Javascript Programmeirung und mit Canvas'
    },
    technologies: ['HTML', 'CSS', 'Javascript'],
    images: ['/img/myskills/html.png','/img/myskills/css.png', '/img/myskills/javascript.png' ],
    github: 'github.com/herzogelias/sharky',
    livetest: 'dukessharkygame.elias-herzog.de'
  }
  ]

  activeProject = this.projects[0];

  projectnavbar: string[] = ['Join', 'Sharky']


  changeIndex(index: number) {
    this.activeProject = this.projects[index];
  }
}
