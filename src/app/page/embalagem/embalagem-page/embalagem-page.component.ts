import { Component, ViewChild } from '@angular/core';
import { EmbalagemListComponent } from "../embalagem-list/embalagem-list.component";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { EmbalagemFormComponent } from "../embalagem-form/embalagem-form.component";

@Component({
  selector: 'app-embalagem-page',
  templateUrl: './embalagem-page.component.html',
  styleUrls: ['./embalagem-page.component.css'],
  providers: [DialogService]
})
export class EmbalagemPageComponent {

  @ViewChild(EmbalagemListComponent) embalagemListComponent!: EmbalagemListComponent;

  constructor(private dialogService: DialogService) {
  }

  openEmbalagemForm() {
    const dialogRef: DynamicDialogRef = this.dialogService.open(EmbalagemFormComponent, {
      header: 'Cadastrar Embalagem',
      width: '80%',
      maximizable: true,
    });
    dialogRef.onClose.subscribe(() => {
      this.embalagemListComponent.ngOnInit();
    })
  }
}
