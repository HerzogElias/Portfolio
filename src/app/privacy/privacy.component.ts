import { Component } from '@angular/core';
import { NavbarComponent } from "../above-the-fold/navbar/navbar.component";
import { NavbarResponsiveComponent } from "../above-the-fold/navbar-responsive/navbar-responsive.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-privacy',
  imports: [NavbarComponent, NavbarResponsiveComponent, FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

}
