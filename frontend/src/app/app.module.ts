import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import {HttpClientModule} from '@angular/common/http'
import { PilotoService } from './services/piloto.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CrudComponent } from './components/crud/crud.component';



@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PilotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
