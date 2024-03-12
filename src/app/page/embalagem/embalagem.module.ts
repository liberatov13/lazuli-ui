import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbalagemPageComponent } from './embalagem-page/embalagem-page.component';
import { EmbalagemListComponent } from './embalagem-list/embalagem-list.component';
import { MessagesModule } from "primeng/messages";
import { TableModule } from "primeng/table";


@NgModule({
  declarations: [
    EmbalagemPageComponent,
    EmbalagemListComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    TableModule,
  ]
})
export class EmbalagemModule { }
