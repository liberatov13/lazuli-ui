import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenubarModule } from "primeng/menubar";
import { TipoProdutoModule } from "./pages/tipo-produto/tipo-produto.module";

@NgModule({
  declarations: [
    AppComponent,

    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TipoProdutoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
