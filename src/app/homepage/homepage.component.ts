import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { WhyMeComponent } from "../why-me/why-me.component";

@Component({
  selector: 'app-homepage',
  imports: [AboveTheFoldComponent, WhyMeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}