import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoPageComponent } from "./page/tipo-produto/tipo-produto-page/tipo-produto-page.component";
import { ProdutoPageComponent } from "./page/produto/produto-page/produto-page.component";
import { MarcaPageComponent } from "./page/marca/marca-page/marca-page.component";
import { UnidadeMedidaPageComponent } from "./page/unidade-medida/unidade-medida-page/unidade-medida-page.component";
import { EmbalagemPageComponent } from "./page/embalagem/embalagem-page/embalagem-page.component";

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoPageComponent,
  },
  {
    path: 'marca',
    component: MarcaPageComponent,
  },
  {
    path: 'unidade-medida',
    component: UnidadeMedidaPageComponent,
  },
  {
    path: 'embalagem',
    component: EmbalagemPageComponent,
  },
  {
    path: 'tipo-produto',
    component: TipoProdutoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
