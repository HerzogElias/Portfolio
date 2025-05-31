import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarResponsiveComponent } from '../above-the-fold/navbar-responsive/navbar-responsive.component';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';
import { WhatMyColleguasSayComponent } from '../what-my-colleguas-say/what-my-colleguas-say.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,AboveTheFoldComponent,WhyMeComponent,MySkillsComponent,MyProjectsComponent, WhatMyColleguasSayComponent,ContactMeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
