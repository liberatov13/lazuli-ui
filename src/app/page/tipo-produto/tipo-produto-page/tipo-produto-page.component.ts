import { Component, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { TipoProdutoFormComponent } from "../tipo-produto-form/tipo-produto-form.component";
import { TipoProdutoListComponent } from "../tipo-produto-list/tipo-produto-list.component";
import { Message, MessageService } from "primeng/api";

@Component({
  selector: 'app-tipo-produto-page',
  templateUrl: './tipo-produto-page.component.html',
  styleUrls: ['./tipo-produto-page.component.css'],
  providers: [DialogService, MessageService]
})
export class TipoProdutoPageComponent {

  dialogRef?: DynamicDialogRef;
  messages: Message[] = new Array<Message>();
  @ViewChild(TipoProdutoListComponent) listComponent!: TipoProdutoListComponent;

  constructor(private dialogService: DialogService, private messageService: MessageService) {
  }

  openTipoProdutoForm() {
    this.dialogRef = this.dialogService.open(TipoProdutoFormComponent, {
      header: 'Cadastrar Tipo de Produto',
      width: '80%'
    });

    this.dialogRef.onClose.subscribe(() => {
      this.listComponent.ngOnInit();
    });
  }

  onTipoDeleted(idTipoProduto: number) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso!',
      detail: `Tipo de produto ${idTipoProduto} excluído com sucesso`
    });
  }

  errorMessageListProduto(error: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Ops!',
      detail: error.message
    });
  }
}
