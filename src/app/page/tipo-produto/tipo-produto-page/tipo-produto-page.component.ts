import { Component, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { TipoProdutoFormComponent } from "../tipo-produto-form/tipo-produto-form.component";
import { TipoProdutoListComponent } from "../tipo-produto-list/tipo-produto-list.component";

@Component({
  selector: 'app-tipo-produto-page',
  templateUrl: './tipo-produto-page.component.html',
  styleUrls: ['./tipo-produto-page.component.css'],
  providers: [DialogService]
})
export class TipoProdutoPageComponent {

  dialogRef?: DynamicDialogRef;

  @ViewChild(TipoProdutoListComponent) listComponent!: TipoProdutoListComponent;

  constructor(private dialogService: DialogService) {
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

}
