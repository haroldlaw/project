import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-voucher',
  templateUrl: 'voucher.page.html',
  styleUrls: ['voucher.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class VoucherPage {
  constructor() {}
}
