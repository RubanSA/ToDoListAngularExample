import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoListItemsComponent } from './to-do-list-items/to-do-list-items.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { FormatPipe } from './format.pipe';
import { WorkListComponent } from './work-list/work-list.component';

@NgModule({
  declarations: [	
    AppComponent,
    ToDoListItemsComponent,
      TestPipeComponent,
      FormatPipe,
      WorkListComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
