import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenubarModule } from "primeng/menubar";
import { TipoProdutoModule } from "./page/tipo-produto/tipo-produto.module";
import { HttpClientModule } from "@angular/common/http";
import { ProdutoModule } from "./page/produto/produto.module";
import { MarcaModule } from "./page/marca/marca.module";
import { UnidadeMedidaModule } from "./page/unidade-medida/unidade-medida.module";
import { EmbalagemModule } from "./page/embalagem/embalagem.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EmbalagemModule,
    HttpClientModule,
    MarcaModule,
    MenubarModule,
    ProdutoModule,
    TipoProdutoModule,
    UnidadeMedidaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
