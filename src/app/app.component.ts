import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projekt } from "./interfaces/projects.interface";
import { FooterComponent } from "./shared/footer/footer.component";
import { BrowserModule } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule} from '@ngx-translate/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TranslateModule],
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