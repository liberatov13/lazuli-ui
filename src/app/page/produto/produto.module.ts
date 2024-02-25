import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";


@NgModule({
  declarations: [
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    TableModule,
    TooltipModule,
  ]
})
export class ProdutoModule { }
