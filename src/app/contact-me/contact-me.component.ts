import { Component } from '@angular/core';
import { ContactformComponent } from "./contactform/contactform.component";

@Component({
  selector: 'app-contact-me',
  imports: [ContactformComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
