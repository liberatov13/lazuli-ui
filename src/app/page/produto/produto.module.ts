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
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ToggleButtonModule } from "primeng/togglebutton";
import { DropdownModule } from "primeng/dropdown";
import { BlockUIModule } from "primeng/blockui";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ProdutoPageComponent } from './produto-page/produto-page.component';
import { DynamicDialogModule } from "primeng/dynamicdialog";


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoFormComponent,
    ProdutoPageComponent
  ],
  imports: [
    BlockUIModule,
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    DropdownModule,
    DynamicDialogModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    ProgressSpinnerModule,
    TableModule,
    ToggleButtonModule,
    TooltipModule,
  ]
})
export class ProdutoModule { }
