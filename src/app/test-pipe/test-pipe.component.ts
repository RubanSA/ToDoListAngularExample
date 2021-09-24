import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from "@angular/common/locales/ru";
import { FormatPipe } from '../format.pipe'; "../format.pipe"
registerLocaleData(localeRu, "ru");

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {
  num: number = Math.PI;
  num1: number  = 12.45;
  str: string = "London is the capital of Great Britain";
  dateObject: Date = new Date();
  dateString: string = "2021-09-24T19:21:53.126Z";
  dateNumber: number = 1632498297345;
  userInfo: Object = {firstname: "Сергей", surname: "Рубан", position: {company: "IT STEP Academy", jobTitle: "teacher"}, isMerried: true, age: 40, sex: "male"};
  sexMapping: {[key:string]:string} = {"male": "Мужчина", "female": "Женщина", "other": "Не определился пока"};
  map: {[key:number]:string} = {1: "Молоко", 2: "Мясо", 3: "Яйца"};
  userSex: string ="other";
  constructor() { }

  ngOnInit() {
  }

}
