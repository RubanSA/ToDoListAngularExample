import { Component, OnInit } from '@angular/core';
import {ToDoListItem} from "../to-do-list";

@Component({
  selector: 'app-to-do-list-items',
  templateUrl: './to-do-list-items.component.html',
  styleUrls: ['./to-do-list-items.component.css']
})
export class ToDoListItemsComponent implements OnInit {
  //item: ToDoListItem = new ToDoListItem(1, "Позвонить Славе", true);
  item!: ToDoListItem;
  links!: string[];
  constructor() { 
    this.item = new ToDoListItem();
    this .item.id = 2;
    this .item.name = "Выдать лабу и ДЗ!";
    this .item.isCompleted = false;
    this.links = Array<string>("Wiki", "Personnal Page", "Facebook");
  }

  ngOnInit(): void {
  }

}
