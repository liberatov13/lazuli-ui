import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoPageComponent } from "./page/tipo-produto/tipo-produto-page/tipo-produto-page.component";
import { ProdutoPageComponent } from "./page/produto/produto-page/produto-page.component";

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoPageComponent,
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
