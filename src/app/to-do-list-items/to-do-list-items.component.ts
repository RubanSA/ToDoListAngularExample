import { Component, OnInit } from '@angular/core';
import {ToDoListItem} from "../to-do-list";
import {items} from "../mock-todo-items"

@Component({
  selector: 'app-to-do-list-items',
  templateUrl: './to-do-list-items.component.html',
  styleUrls: ['./to-do-list-items.component.css']
})
export class ToDoListItemsComponent implements OnInit {
  //item: ToDoListItem = new ToDoListItem(1, "Позвонить Славе", true);
  item!: ToDoListItem;
  links!: string[];
  toDoItems: ToDoListItem[] = items;
  car: string = "Mazda";
  countMapping: {[key:string]:string}={"=0": "Нет дел на сегодня", "=1": "1 дело", "=3": "3 срочных дела", "other": "дел невпровот"};

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
