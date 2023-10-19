import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IgxCheckboxModule, IgxDragDropModule, IgxIconModule, IgxListModule} from 'igniteui-angular';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import { FoldersComponent } from './components/folders/folders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxDragDropModule,
    IgxIconModule,
    IgxCheckboxModule,
    IgxListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
