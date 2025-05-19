import { Component } from '@angular/core';
import { NavbarComponent } from "../above-the-fold/navbar/navbar.component";
import { NavbarResponsiveComponent } from "../above-the-fold/navbar-responsive/navbar-responsive.component";

@Component({
  selector: 'app-imprint',
  imports: [NavbarComponent, NavbarResponsiveComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
