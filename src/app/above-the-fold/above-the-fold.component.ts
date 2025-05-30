import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-above-the-fold',
  imports: [NavbarComponent, TranslateModule, CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {
}
