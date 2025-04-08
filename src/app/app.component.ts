import { Component, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projekt } from "./interfaces/projects.interface";
import { FooterComponent } from "./shared/footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}