import { Component, ViewChild } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { MarcaFormComponent } from "../marca-form/marca-form.component";
import { MarcaListComponent } from "../marca-list/marca-list.component";

@Component({
  selector: 'app-marca-page',
  templateUrl: './marca-page.component.html',
  styleUrls: ['./marca-page.component.css'],
  providers: [DialogService]
})
export class MarcaPageComponent {

  dialogRef?: DynamicDialogRef;
  @ViewChild(MarcaListComponent) marcaListComponent!: MarcaListComponent;

  constructor(private diaogService: DialogService) {
  }

  openMarcaForm() {
    this.dialogRef = this.diaogService.open(MarcaFormComponent, {
      header: 'Cadastrar Marca',
      width: '80%',
      maximizable: true,
    });

    this.dialogRef.onClose.subscribe(() => {
      this.marcaListComponent.ngOnInit();
    });
  }

}
