import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadeMedidaPageComponent } from './unidade-medida-page/unidade-medida-page.component';
import { ButtonModule } from "primeng/button";
import { UnidadeMedidaListComponent } from './unidade-medida-list/unidade-medida-list.component';
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TooltipModule } from "primeng/tooltip";



@NgModule({
  declarations: [
    UnidadeMedidaPageComponent,
    UnidadeMedidaListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MessagesModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
  ]
})
export class UnidadeMedidaModule { }
