import { Item } from './../models/item.model';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

import { Router, ActivatedRoute } from '@angular/router';
import { SupportComponent } from '../support/support.component';

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

    

  }

  constructor(

  private itemService: ItemService,
  private router: Router,
  private route: ActivatedRoute,
  supportComponent: SupportComponent,


  ) { }

  getItem(id) {
    this.itemService.get(id).subscribe();

  
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

 


