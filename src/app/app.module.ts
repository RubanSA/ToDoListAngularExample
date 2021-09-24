import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListItemsComponent } from './to-do-list-items/to-do-list-items.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [	
    AppComponent,
    ToDoListItemsComponent,
      TestPipeComponent,
      FormatPipe
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
