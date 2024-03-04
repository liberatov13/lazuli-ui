import { Component, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { UnidadeMedidaFormComponent } from "../unidade-medida-form/unidade-medida-form.component";
import { UnidadeMedidaListComponent } from "../unidade-medida-list/unidade-medida-list.component";

@Component({
  selector: 'app-unidade-medida-page',
  templateUrl: './unidade-medida-page.component.html',
  styleUrls: ['./unidade-medida-page.component.css'],
  providers: [DialogService]
})
export class UnidadeMedidaPageComponent {

  isLoading: boolean = false;
  dialogRef?: DynamicDialogRef;
  @ViewChild(UnidadeMedidaListComponent) listComponent!: UnidadeMedidaListComponent;

  constructor(private dialogService: DialogService) { }

  openUnidadeMedidaForm() {
    this.dialogRef = this.dialogService.open(UnidadeMedidaFormComponent, {
      header: 'Cadastrar',
      width: '80%',
      maximizable: true
    });

    this.dialogRef.onClose.subscribe(() => {
      this.listComponent.ngOnInit();
    });
  }
}
