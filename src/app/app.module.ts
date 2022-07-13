import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodoListModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
