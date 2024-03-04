import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadeMedidaPageComponent } from './unidade-medida-page/unidade-medida-page.component';
import { ButtonModule } from "primeng/button";
import { UnidadeMedidaListComponent } from './unidade-medida-list/unidade-medida-list.component';
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TooltipModule } from "primeng/tooltip";
import { UnidadeMedidaFormComponent } from './unidade-medida-form/unidade-medida-form.component';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DynamicDialogModule } from "primeng/dynamicdialog";


@NgModule({
  declarations: [
    UnidadeMedidaPageComponent,
    UnidadeMedidaListComponent,
    UnidadeMedidaFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DynamicDialogModule,
    MessagesModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
    FormsModule,
    InputTextModule,
  ]
})
export class UnidadeMedidaModule { }
