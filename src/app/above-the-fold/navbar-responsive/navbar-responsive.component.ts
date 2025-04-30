import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-responsive',
  imports: [TranslateModule],
  templateUrl: './navbar-responsive.component.html',
  styleUrl: './navbar-responsive.component.scss'
})
export class NavbarResponsiveComponent {
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
