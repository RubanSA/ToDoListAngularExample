import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
  //styles: ["div{color: red}"]
})
export class AppComponent {
  title = 'Наше первое Angular приложение';
  getTitle(): string{
    return "Hello, world of Angular";
  }
}
