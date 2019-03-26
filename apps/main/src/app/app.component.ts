import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'hulk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hulk-Main iea';

  public appBaseHref = environment.BASE_HREF;

  constructor(
    private translate: TranslateService,
    
  ) {
    this.translate.currentLoader.getTranslation('en').subscribe(enTranslations => {
      this.translate.setTranslation('en', enTranslations, true);
      this.translate.setDefaultLang('en');
    });
  }

}
