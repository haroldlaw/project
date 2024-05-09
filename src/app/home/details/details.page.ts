import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavController, IonBadge, IonIcon, IonFooter, IonContent, IonHeader, IonToolbar, IonBackButton, IonButton, IonLabel, IonItem, IonText } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonBadge, IonIcon, IonFooter, IonItem, IonText, IonLabel, IonContent, IonHeader, IonToolbar, IonBackButton, IonButton],
})
export class DetailsPage implements OnInit, OnDestroy {
  id!: string;
  item: any;
  addToBag!: any;
  totalItems = 0;
  cartSub!: Subscription;
  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private api = inject(ApiService);
  public cartService = inject(CartService);

  constructor() { }

  ngOnInit() {
    this.getItem();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        console.log(cart);
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

  getItem(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if(!id || id == '0'){
      this.navCtrl.back()
      return;
    }
    this.id = id;
    this.item = this.api.items.find((record: any) => record.id == id);
    console.log(this.item);
  }

  addItem() {
    const result = this.cartService.addQuantity(this.item);
    this.addedText();
  }

  addedText() {
    this.addToBag = 'Added to Bag';
    setTimeout(() => {
      this.addToBag = null;
    }, 1000);
  }

}
