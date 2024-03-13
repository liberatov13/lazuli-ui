import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbalagemPageComponent } from './embalagem-page/embalagem-page.component';
import { EmbalagemListComponent } from './embalagem-list/embalagem-list.component';
import { MessagesModule } from "primeng/messages";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { EmbalagemFormComponent } from './embalagem-form/embalagem-form.component';
import { BlockUIModule } from "primeng/blockui";
import { FormsModule } from "@angular/forms";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputNumberModule } from "primeng/inputnumber";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { DynamicDialogModule } from "primeng/dynamicdialog";


@NgModule({
  declarations: [
    EmbalagemPageComponent,
    EmbalagemListComponent,
    EmbalagemFormComponent
  ],
  imports: [
    AutoCompleteModule,
    ButtonModule,
    BlockUIModule,
    CommonModule,
    DropdownModule,
    DynamicDialogModule,
    FormsModule,
    InputNumberModule,
    MessagesModule,
    ProgressSpinnerModule,
    TableModule,
    InputTextModule,
  ]
})
export class EmbalagemModule { }
