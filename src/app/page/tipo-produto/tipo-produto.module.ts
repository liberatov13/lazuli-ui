import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoProdutoFormComponent } from './tipo-produto-form/tipo-produto-form.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { MessagesModule } from "primeng/messages";
import { TipoProdutoListComponent } from './tipo-produto-list/tipo-produto-list.component';
import { TableModule } from "primeng/table";
import { TipoProdutoPageComponent } from './tipo-produto-page/tipo-produto-page.component';
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";


@NgModule({
  declarations: [
    TipoProdutoFormComponent,
    TipoProdutoListComponent,
    TipoProdutoPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CommonModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    TableModule,
    TooltipModule,
  ]
})
export class TipoProdutoModule { }
