import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BridgeService } from './shared/bridge.service';
import { HomeComponent } from './home/home.component';
import { NameAComponent } from './name-a/name-a.component';
import {FormsModule} from '@angular/forms';
import { NameBComponent } from './name-b/name-b.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NameAComponent,
    NameBComponent,
    HeaderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [BridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
