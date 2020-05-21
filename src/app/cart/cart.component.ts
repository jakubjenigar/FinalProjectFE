import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../services/cartitem.service';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit {

  constructor(private cartItemService: CartItemService, private cartService: CartService) {}

  data: Observable<any>;
  deleteList: any = [];
  prices: any;
  totalPrice: Observable<number>;

  lastAction: string;
  displayedColumns: string[] = ['checked', 'picture', 'itemName', 'description', 'price'];

  ngOnInit() {
    this.cartService.validate();
    this.loadList();
    // this.geItems(sessionStorage.getItem('cartId'));
  }

  loadList() {
    const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.Price, 10);

    this.data = this.cartItemService.getItems(sessionStorage.getItem('cartId'));
    this.data.subscribe( (response) => {
      this.data = response;
      this.prices = this.data;
      this.totalPrice = this.prices.reduce(reducer, 0);
    });
  }

  onChange(event, element) {

    element.checked = !element.checked;

    if (!event.checked) {
        const index = this.deleteList.findIndex(x => x === element.CartItemId);
        this.deleteList.splice(index, 1);
        console.log(index);
    } else {
        this.deleteList.push(element);
    }

    console.log( event, element, this.deleteList);
  }

  async deleteCheckedItems() {
    // const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue.Price, 10);

    await this.deleteList.forEach(element => {
      this.cartItemService
      .delete(element.CartItemId)
      .toPromise()
      .then((result) => {
        this.loadList();
    });
    });
    // this.data = this.cartItemService.getItems(sessionStorage.getItem('cartId'));
    // this.data.subscribe( (response) => {
    // this.data = response;
    // this.prices = this.data;
    // this.totalPrice = this.prices.reduce(reducer, 0);
    // });

  }


}

export interface Element {
  checked: boolean;
  CartItemId: number;
  ItemName: string;
  Description: string;
  Picture: string;
  Price: number;
}
