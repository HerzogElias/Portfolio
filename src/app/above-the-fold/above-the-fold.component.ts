import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavbarResponsiveComponent } from "./navbar-responsive/navbar-responsive.component";



@Component({
  selector: 'app-above-the-fold',
  imports: [NavbarComponent, TranslateModule, CommonModule, NavbarResponsiveComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {
  isMenuVisible: boolean = false; 

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
