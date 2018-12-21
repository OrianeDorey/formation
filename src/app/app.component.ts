import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PwaService } from './shared/services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isPwaAvailable: boolean;

  constructor(
    private pw: PwaService
  ) {
    this.isPwaAvailable = this.pw.updates.isEnabled;
    console.log(this.isPwaAvailable);

  }

}
