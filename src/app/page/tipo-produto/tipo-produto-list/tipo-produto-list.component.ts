import { Component, OnInit } from '@angular/core';
import { TipoProdutoService } from "../../../service/tipo-produto/tipo-produto.service";
import { Message, MessageService } from "primeng/api";
import { TipoProduto } from "../../../domain/tipo-produto";

@Component({
  selector: 'app-tipo-produto-list',
  templateUrl: './tipo-produto-list.component.html',
  styleUrls: ['./tipo-produto-list.component.css'],
  providers: [MessageService]
})
export class TipoProdutoListComponent implements OnInit {

  tiposProduto: TipoProduto[] = [];

  messages: Message[] = new Array<Message>();

  constructor(private tipoProdutoService: TipoProdutoService, private messageService: MessageService) {
  }

  ngOnInit(): void {
        this.tipoProdutoService.findAll().subscribe({
          next: (response: TipoProduto[]) => {
            this.tiposProduto = response;
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao consultar os tipos de produto'})
          }
        })
    }

}