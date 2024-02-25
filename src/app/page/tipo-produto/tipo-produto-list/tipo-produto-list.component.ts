import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TipoProdutoService } from "../../../service/tipo-produto/tipo-produto.service";
import { ConfirmationService, Message, MessageService } from "primeng/api";
import { TipoProduto } from "../../../domain/tipo-produto";

@Component({
  selector: 'app-tipo-produto-list',
  templateUrl: './tipo-produto-list.component.html',
  styleUrls: ['./tipo-produto-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TipoProdutoListComponent implements OnInit {

  tiposProduto: TipoProduto[] = [];

  messages: Message[] = new Array<Message>();
  isLoading: boolean = false;
  @Output() onTipoProdutoDeleted: EventEmitter<number> = new EventEmitter<number>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private tipoProdutoService: TipoProdutoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.tipoProdutoService.findAll().subscribe({
      next: (response: TipoProduto[]) => {
        this.tiposProduto = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Ops!',
          detail: 'Ocorreu um erro ao consultar os tipos de produto'
        })
      }
    })
  }

  delete(idTipoProduto: number) {
    this.confirmationService.confirm({
      header: 'Remover',  message: 'Deseja realmente excluir o tipo de produto?',
      icon: 'fa-solid fa-triangle-exclamation', acceptLabel: 'Sim', rejectLabel: 'Não',
      accept: () => {
        this.tipoProdutoService.delete(idTipoProduto).subscribe({
          next: () => {
            this.ngOnInit();
            this.onTipoProdutoDeleted.emit(idTipoProduto);
          },
          error: (error) => {
            console.error(error);
            this.onError.emit({message: 'Ocorreu um erro ao deletar o tipo de produto', error})
          }
        });
      }
    })
  }

}
