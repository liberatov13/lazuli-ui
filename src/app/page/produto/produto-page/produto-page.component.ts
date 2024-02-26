import { Component, ViewChild } from '@angular/core';
import { Message, MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ProdutoFormComponent } from "../produto-form/produto-form.component";
import { ProdutoListComponent } from "../produto-list/produto-list.component";

@Component({
  selector: 'app-produto-page',
  templateUrl: './produto-page.component.html',
  styleUrls: ['./produto-page.component.css'],
  providers: [MessageService, DialogService]
})
export class ProdutoPageComponent {

  @ViewChild(ProdutoListComponent) listComponent!: ProdutoListComponent;
  messages: Message[] = new Array<Message>();
  dialogRef?: DynamicDialogRef;

  constructor(private dialogService: DialogService) { }

  openProdutoForm() {
    this.dialogRef = this.dialogService.open(ProdutoFormComponent, {
      header: 'Cadastrar Produto',
      width: '80%',
      maximizable: true
    });

    this.dialogRef.onClose.subscribe(() => {
      this.listComponent.ngOnInit();
    });
  }

}
