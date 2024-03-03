import { Component, OnInit } from '@angular/core';
import { UnidadeMedida } from "../../../domain/unidade-medida";
import { UnidadeMedidaService } from "../../../service/unidade-medida/unidade-medida.service";
import { ConfirmationService, Message, MessageService } from "primeng/api";

@Component({
  selector: 'app-unidade-medida-list',
  templateUrl: './unidade-medida-list.component.html',
  styleUrls: ['./unidade-medida-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class UnidadeMedidaListComponent implements OnInit {

  unidadesMedida: UnidadeMedida[] = [];

  isLoading: boolean = false;
  messages: Message[] = new Array<Message>();

  constructor(
    private unidadeMedidaService: UnidadeMedidaService,
    private messageService: MessageService,
    private cofirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.unidadeMedidaService.findAll().subscribe({
      next: (unidadesMedida: UnidadeMedida[]) => {
        this.unidadesMedida = unidadesMedida;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error)
        this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao buscar unidades de medida'});
        this.isLoading = false;
      }
    });
  }

  delete(idUnidadeMedida: number) {
    this.cofirmationService.confirm({
      header: 'Excluir',
      message: 'Deseja realmente excluir esta unidade de medida?',
      accept: () => {
        this.unidadeMedidaService.delete(idUnidadeMedida).subscribe({
          next: () => {
            this.messageService.add({severity: 'success', summary: 'Sucesso!', detail: 'Unidade de medida excluída com sucesso!'});
            this.ngOnInit();
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao excluir a unidade de medida'});
          }
        });
      }
    })
  }
}
