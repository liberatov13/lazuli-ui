import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoProdutoFormComponent } from './tipo-produto-form/tipo-produto-form.component';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [
    TipoProdutoFormComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
  ]
})
export class TipoProdutoModule { }
