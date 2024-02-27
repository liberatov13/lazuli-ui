import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaPageComponent } from './marca-page/marca-page.component';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { TooltipModule } from "primeng/tooltip";
import { MarcaFormComponent } from './marca-form/marca-form.component';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { ToggleButtonModule } from "primeng/togglebutton";
import { DynamicDialogModule } from "primeng/dynamicdialog";


@NgModule({
  declarations: [
    MarcaPageComponent,
    MarcaListComponent,
    MarcaFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DynamicDialogModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    TableModule,
    TooltipModule,
    ToggleButtonModule,
  ]
})
export class MarcaModule { }
