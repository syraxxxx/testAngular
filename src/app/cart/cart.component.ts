import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../service-cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  erreur = '';
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    if (
      this.checkoutForm.value.name == null ||
      this.checkoutForm.value.name == ''
    ) {
      this.erreur = 'Le champ est obligatoire ! ';
    } else {
      window.alert(
        'Votre achat a ete effectuer : ' + this.checkoutForm.value.name
      );
      this.erreur = '';
      this.checkoutForm.reset();
      this.items = this.cartService.clearCart();
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }
}
