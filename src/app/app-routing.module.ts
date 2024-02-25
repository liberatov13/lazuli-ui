import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoPageComponent } from "./page/tipo-produto/tipo-produto-page/tipo-produto-page.component";
import { ProdutoListComponent } from "./page/produto/produto-list/produto-list.component";

const routes: Routes = [
  {
    path: 'produto',
    component: ProdutoListComponent,
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
