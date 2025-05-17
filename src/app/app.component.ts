import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule} from '@ngx-translate/core';

import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { WhatMyColleguasSayComponent } from './what-my-colleguas-say/what-my-colleguas-say.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TranslateModule, AboveTheFoldComponent,WhyMeComponent,MySkillsComponent,MyProjectsComponent,WhatMyColleguasSayComponent,ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('de');
    this.translate.use('en');
  }

    ngOnInit() {
      AOS.init({
        duration: 1200,
        once: true,     
      });
    }
}