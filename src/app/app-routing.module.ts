import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoProdutoFormComponent } from "./page/tipo-produto/tipo-produto-form/tipo-produto-form.component";

const routes: Routes = [
  {
    path: 'tipo-produto/cadastrar',
    component: TipoProdutoFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
