import { Component,AfterViewInit } from '@angular/core';
import { SingleProjectComponent } from "./single-project/single-project.component";
import { CommonModule } from '@angular/common';
import { Projekt } from '../interfaces/projects.interface';
import { TranslateModule } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-projects',
  imports: [SingleProjectComponent, CommonModule, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})


export class MyProjectsComponent{
  projects: Projekt[] = [{
    projectname: 'Join',
    technologies: 'HTML, CSS, Javascript',
    content: {
      aboutTheProject: 'myProjects.join.aboutTheProject',
      organisation: 'myProjects.join.organisation',
      whatILearned: 'myProjects.join.whatILearned'
    },
    images: ['/img/myskills/firebase.png', '/img/myskills/css.png', '/img/myskills/javascript.png'],
    imageProject: ['/img/myprojects/Join.jpg'],
    github: 'https://github.com/HerzogElias/JOIN_KANBAN',
    livetest: 'https://join.elias-herzog.de/'
  },
  {
    projectname: 'Sharky',
    technologies: 'HTML, Canvas, Objektorientiertes Javascript',
    content: {
      aboutTheProject: 'myProjects.sharky.aboutTheProject',
      organisation: 'myProjects.sharky.organisation',
      whatILearned: 'myProjects.sharky.whatILearned'
    },
    images: ['/img/myskills/html.png','/img/myskills/css.png', '/img/myskills/javascript.png' ],
    imageProject: ['/img/myprojects/Sharkygame.jpg'],
    github: 'https://github.com/HerzogElias/Sharkie',
    livetest: 'https://dukessharkygame.elias-herzog.de/'
  },
    {
    projectname: 'DevSecOps Blog',
    technologies: 'React, Docusaurus, CI/CD',
    content: {
      aboutTheProject: 'myProjects.dsoblog.aboutTheProject',
      organisation: 'myProjects.dsoblog.organisation',
      whatILearned: 'myProjects.dsoblog.whatILearned'
    },
    images: ['/img/myskills/react.png','/img/myskills/docusaurus.png', '/img/myskills/cd.png' ],
    imageProject: ['/img/myprojects/DSO-Portfolio.png'],
    github: 'https://github.com/HerzogElias/DSO-Portfolio',
    livetest: 'https://devsecops-knowledgebase.elias-herzog.de/'
  }
  ]

  activeProject = this.projects[0];

  projectnavbar: string[] = ['Join', 'Sharky', 'DevSecOps Blog']
  


  changeIndex(index: number) {
    this.activeProject = this.projects[index];
  }
  }

