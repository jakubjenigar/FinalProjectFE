import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { CartItemService} from '../services/cartitem.service';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  item: any;

  ngOnInit() {
    this.getItem(this.route.snapshot.paramMap.get('id'));
    this.retrieveItem();
    this.cartService.validate();
  }

  constructor(
  private itemService: ItemService,
  private cartService: CartService,
  private cartItemService: CartItemService,
  private route: ActivatedRoute,
  private snackBar: MatSnackBar
  ) { }

  addToCart(id) {
    if (!sessionStorage.getItem('cartId')) {

      this.addItemToCard(id);

      // if (!sessionStorage.getItem('customerId')) {
      //   const customerID = '0';
      //   console.log(sessionStorage.getItem('customerId'));
      //   const response = this.getCardId(customerID);
      //    this.addItemToCard(id);
      // } else {
      //   const customerID = sessionStorage.getItem('customerId');
      //   console.log(sessionStorage.getItem('customerId'));
      //   const response = this.getCardId(customerID);
      //   this.addItemToCard(id);
      // }
    } else {
      this.addItemToCard(id);
      this.snackBar.open('Successfully added to cart', 'Dismiss', {
        duration: 3000,
        panelClass: ['mat-snack-bar-container.', 'mat-stroked-button']
      });
    }
  }

  getItem(id) {
    this.itemService.get(id).subscribe();
  }

  getCardId(id): any {
    this.cartService
    .getId(id)
    .subscribe( (response) => {
    sessionStorage.setItem('cartId', response['cartId']);
    });
  }

  addItemToCard(id): any {
    const data = {
      cartId: sessionStorage.getItem('cartId'),
      itemId: id
    };

    console.log(data);
    this.cartItemService.create(data).subscribe();
  }

  retrieveItem() {
    this.itemService.getAll().subscribe(
      data => {
        this.item = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}






