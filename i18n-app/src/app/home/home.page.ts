import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import {
  IonContent,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { languageOutline, logInOutline, personAddOutline } from 'ionicons/icons';

interface Language {
  code: string;
  labelKey: string;
  flag: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TranslatePipe,
    IonContent,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonItem,
  ],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentLang: string = 'es';

  languages: Language[] = [
    { code: 'es', labelKey: 'HOME.LANGUAGE_ES', flag: '🇲🇽' },
    { code: 'en', labelKey: 'HOME.LANGUAGE_EN', flag: '🇺🇸' },
  ];

  constructor(private translate: TranslateService) {
    addIcons({ languageOutline, logInOutline, personAddOutline });
  }

  onLanguageChange(event: any) {
    const langCode = event.detail.value;
    this.translate.use(langCode);
    this.currentLang = langCode;
  }
}
