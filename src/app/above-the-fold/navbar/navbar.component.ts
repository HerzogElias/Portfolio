import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private translate:TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  toogleTranslation(languae:string){
    this.translate.use(languae);
    const CURRENT_LANGUAGE = this.translate.currentLang;
    console.log(CURRENT_LANGUAGE);
  }
}
