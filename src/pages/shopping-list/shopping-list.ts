import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NgForm } from "@angular/forms"
import {ShoppingListService} from "../../services/shopping-list";
import {Ingredient} from "../../models/ingredients";

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  listItems : Ingredient[];

  constructor(private slService: ShoppingListService){}

  ionViewWillEnter(){
    this.loadItems();
  }


  onAddItem(form: NgForm){
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  onCheckItem(index: number){
    this.slService.removeItem(index);
    this.loadItems();
    console.log(index);
  }

  private loadItems(){
    this.listItems = this.slService.getItems();
  }
}
