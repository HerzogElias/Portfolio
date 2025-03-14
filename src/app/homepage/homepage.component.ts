import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { WhyMeComponent } from "../why-me/why-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";
import { WhatMyColleguasSayComponent } from "../what-my-colleguas-say/what-my-colleguas-say.component";

@Component({
  selector: 'app-homepage',
  imports: [AboveTheFoldComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, WhatMyColleguasSayComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}