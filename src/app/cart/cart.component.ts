import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../services/cartitem.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})



export class CartComponent implements OnInit {

  constructor(private cartItemService: CartItemService) {}

  data: Observable<any>;
  deleteList: any = [];

  lastAction: string;
  displayedColumns: string[] = ['checked', 'picture', 'itemName', 'description', 'price'];

  ngOnInit() {
     this.data = this.cartItemService.getItems(sessionStorage.getItem('cartId'));
     this.data.subscribe( (response) => {
      this.data = response;
      console.log(this.data, 'This is data');
    });
    // this.geItems(sessionStorage.getItem('cartId'));
  }

  onChange(event, element) {

    element.checked = !element.checked;

    if (!event.checked) {
        const index = this.deleteList.findIndex(x => x === element.CartItemId);
        this.deleteList.splice(index, 1);
        console.log(index);
    } else {
        this.deleteList.push(element.CartItemId);
    }

    console.log( event, element, this.deleteList);
  }

  deleteCheckedItems(data) {

    data.forEach(element => {
      this.cartItemService
      .delete(element)
      .subscribe();
    });

    this.data = this.cartItemService.getItems(sessionStorage.getItem('cartId'));
    this.data.subscribe( (response) => {
    this.data = response;
    console.log(this.data, 'This is data');
    });

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
