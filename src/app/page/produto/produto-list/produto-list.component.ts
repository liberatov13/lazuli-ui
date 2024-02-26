import { Component, OnInit } from '@angular/core';
import { ProdutoService } from "../../../service/produto/produto.service";
import { Produto } from "../../../domain/produto";
import { ConfirmationService, Message, MessageService } from "primeng/api";

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[] = new Array<Produto>();

  messages: Message[] = [];
  isLoading: boolean = false;

  constructor(
    private produtoService: ProdutoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.produtoService.findAll().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao carregar produtos'});
      }
    })
  }

  disable(idProduto: number) {
    this.confirmationService.confirm({
      header: 'Desativar',  message: 'Deseja realmente desativar o produto?',
      icon: 'fa-solid fa-triangle-exclamation', acceptLabel: 'Sim', rejectLabel: 'Não',
      accept: () => {
        this.produtoService.disable(idProduto).subscribe({
          next: () => {
            this.ngOnInit();
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao desativar o produto'});
          }
        });
      }
    });
  }

  activate(idProduto: number) {
    this.confirmationService.confirm({
      header: 'Ativar',  message: 'Deseja realmente ativar o produto?',
      icon: 'fa-solid fa-triangle-exclamation', acceptLabel: 'Sim', rejectLabel: 'Não',
      accept: () => {
        this.produtoService.activate(idProduto).subscribe({
          next: () => {
            this.ngOnInit();
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao ativar o produto'});
          }
        });
      }
    });
  }

}
