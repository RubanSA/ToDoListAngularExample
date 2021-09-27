import { Component, OnInit } from '@angular/core';
import { items } from '../mock-todo-items';
import { ToDoListItem } from '../to-do-list';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  constructor() { }
  toDoItems: ToDoListItem[] = items;
  selectedItem: ToDoListItem = items[0];
  classActive: boolean = true;
  //fontSizeInPx: string="12px";
  //_fontSize: number = 12;
  // set fontSize(size: number){
  //   this._fontSize = size;
  //   this.fontSizeInPx = `${this._fontSize}px`;
  // };

  // get fontSize():number{
  //   return this._fontSize;
  // }
  fontSize: number = 12;
  get fontSizeInPx(): string{
    return `${this.fontSize}px`;
  }
  classObject = {purpleColored: true, greenColored: false, items: true}
  stylebj = {"fontSize": "20px", "background-color": "#DDD", "text-shadow": "7px -3px 2px #CE5937"}

  activateStyle():void{
    //this.classActive = !this.classActive;
    this.classObject.greenColored = !this.classObject.greenColored;
    this.classObject.purpleColored = !this.classObject.greenColored;
  }
  onSelect(item: ToDoListItem): void{
    this.selectedItem = item;
    console.log(item);
    console.log(this.selectedItem);
  }
  ngOnInit(): void {
    this.selectedItem = items[0];
  }

}
