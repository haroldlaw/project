import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  items: any[] = [
    {
      id: '1',
      name: 'Gift Basket',
      price: 150,
      status: true,
      cover: 'assets/gifts/gift-basket.jpg',
      description: 'Unbox joy and excitement with our carefully curated gift basket, filled with delightful surprises.'
    },
    {
      id: '2',
      name: 'Chocolate Box',
      price: 30,
      status: true,
      cover: 'assets/gifts/chocolate-box.jpg',
      description: 'Indulge in the rich and decadent flavors of our chocolate box, a perfect treat for loved ones.'
    },
    {
      id: '3',
      name: 'Handbag',
      price: 1000,
      status: true,
      cover: 'assets/gifts/handbag.jpg',
      description: 'Elevate your style with our chic and fashionable handbag.'
    },
    {
      id: '4',
      name: 'Personalized Mug',
      price: 15,
      status: true,
      cover: 'assets/gifts/mug.jpg',
      description: 'Start your day with a touch of personalization using our delightful personalized mug.'
    },
    {
      id: '5',
      name: 'Perfume Set',
      price: 100,
      status: true,
      cover: 'assets/gifts/perfume-set.jpg',
      description: 'Discover the essence of luxury with our perfume set, a captivating blend of enchanting fragrances.'
    },
    {
      id: '6',
      name: 'Jewelry Box',
      price: 200,
      status: true,
      cover: 'assets/gifts/jewelry-box.jpg',
      description: 'Store your precious jewels in style with our exquisitely designed jewelry box.'
    },
    {
      id: '7',
      name: 'Wallet',
      price: 300,
      status: true,
      cover: 'assets/gifts/wallet.jpg',
      description: 'Upgrade your accessory collection with our stylish and durable wallet.'
    },
    {
      id: '8',
      name: 'Phone Case',
      price: 10,
      status: true,
      cover: 'assets/gifts/phone-case.jpg',
      description: 'Protect your device in style with our trendy phone case.'
    },
    {
      id: '9',
      name: 'Luggage',
      price: 500,
      status: true,
      cover: 'assets/gifts/luggage.jpg',
      description: 'Embark on journeys in style with our luggage, crafted for the modern-day explorer.'
    },
    {
      id: '10',
      name: 'Wall Clock',
      price: 100,
      status: true,   
      cover: 'assets/gifts/wall-clock.jpg',
      description: 'Enhance your living space with our wall clock.'
    },
  ];

  constructor() { }
}
