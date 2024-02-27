import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaPageComponent } from './marca-page/marca-page.component';
import { MarcaListComponent } from './marca-list/marca-list.component';
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { TooltipModule } from "primeng/tooltip";


@NgModule({
  declarations: [
    MarcaPageComponent,
    MarcaListComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    TableModule,
    TooltipModule,
  ]
})
export class MarcaModule { }
