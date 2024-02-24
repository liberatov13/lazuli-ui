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



@NgModule({
  declarations: [
    TipoProdutoFormComponent,
    TipoProdutoListComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    TableModule,
  ]
})
export class TipoProdutoModule { }
