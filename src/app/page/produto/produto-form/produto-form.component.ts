import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProdutoService } from "../../../service/produto/produto.service";
import { Message, MessageService } from "primeng/api";
import { TipoProduto } from "../../../domain/tipo-produto";
import { TipoProdutoService } from "../../../service/tipo-produto/tipo-produto.service";
import { NgForm } from "@angular/forms";
import { Produto } from "../../../domain/produto";

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [MessageService]
})
export class ProdutoFormComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private tipoProdutoService: TipoProdutoService,
    private messageService: MessageService,
  ) {
  }

  produto: Produto = new Produto();
  tiposProduto: TipoProduto[] = new Array<TipoProduto>();

  @Output() onProdutoSaved: EventEmitter<Produto> = new EventEmitter<Produto>();
  isLoading: boolean = false;
  messages: Message[] = new Array<Message>();

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
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao buscar os tipos de produto'});
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.produtoService.save(this.produto).subscribe({
        next: (response: Produto) => {
          this.produto = response;
          this.isLoading = false;
          form.reset();
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: `Produto salvo com sucesso. Código: ${response.idProduto}`});
          this.onProdutoSaved.emit(response);
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
          this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao salvar o produto'});
        }
      });
    } else {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Há informações inválidas'});
    }
  }
}
