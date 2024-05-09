import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonFooter, IonItemGroup, IonListHeader, IonList, IonRow, IonCol, IonText, IonImg, IonThumbnail, IonCard, IonIcon, IonLabel, IonItem, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [DecimalPipe, IonFooter, IonItemGroup, IonListHeader, IonList, IonRow, IonCol, IonText, IonImg, IonThumbnail, IonCard, IonIcon, IonLabel, IonItem, IonButton, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class CartPage implements OnInit, OnDestroy {
  previous!: string;
  cartSub!: Subscription;
  model: any = null;
  item: any;
  private router = inject(Router);
  public cartService = inject(CartService);

  constructor() { }

  ngOnInit() {
    this.checkUrl();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
    });
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

  checkUrl() {
    const route_url = this.router.url;
    const urlParts = route_url.split('/');
    urlParts.pop(); 
    console.log(urlParts);
    this.previous = urlParts.join('/');
    console.log('url: ', this.previous);
  }

  addQuantity(item: any) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item: any) {
    this.cartService.subtractQuantity(item);
  }

}
