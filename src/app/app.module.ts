import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenubarModule } from "primeng/menubar";
import { TipoProdutoModule } from "./page/tipo-produto/tipo-produto.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MenubarModule,
    TipoProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
