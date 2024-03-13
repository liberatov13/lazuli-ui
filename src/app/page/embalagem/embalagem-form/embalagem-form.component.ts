import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from "primeng/api";
import { EmbalagemService } from "../../../service/embalagem/embalagem.service";
import { Embalagem } from "../../../domain/embalagem";
import { ProdutoService } from "../../../service/produto/produto.service";
import { MarcaService } from "../../../service/marca/marca.service";
import { UnidadeMedidaService } from "../../../service/unidade-medida/unidade-medida.service";
import { UnidadeMedida } from "../../../domain/unidade-medida";
import { NgForm } from "@angular/forms";
import { Produto } from "../../../domain/produto";
import { Marca } from "../../../domain/marca";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-embalagem-form',
  templateUrl: './embalagem-form.component.html',
  styleUrls: ['./embalagem-form.component.css'],
  providers: [MessageService]
})
export class EmbalagemFormComponent implements OnInit {

  embalagem: Embalagem = new Embalagem();
  unidadesMedida?: UnidadeMedida[];

  messages: Message[] = [];
  isLoading: boolean = false;
  produtosSuggestion: Produto[] = [];
  marcasSuggestion: Produto[] = [];

  constructor(
    private embalagemService: EmbalagemService,
    private produtoService: ProdutoService,
    private marcaService: MarcaService,
    private unidadeMedidaService: UnidadeMedidaService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.unidadeMedidaService.findAll().subscribe({
      next: (unidadesMedida: UnidadeMedida[]) => {
        this.unidadesMedida = unidadesMedida;
      },
      error: (error) => {
        console.error(error)
        this.messageService.add({severity:'error', summary: 'Ops!', detail: 'Ocorreu um erro ao carregar as unidades de medida.'});
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  autocompleteProduto(event: any): void {
    this.produtoService.autocomplete(event.query).subscribe({
      next: (produtos: Produto[]) => {
        this.produtosSuggestion = produtos;
      },
      error: (error) => {
        console.error(error);
        this.messageService.add({severity:'error', summary: 'Ops!', detail: 'Ocorreu um erro ao buscar os produtos.'});
      }
    });
  }

  autocompleteMarca(event: any): void {
    this.marcaService.autocomplete(event.query).subscribe({
      next: (marcas: Marca[]) => {
        this.marcasSuggestion = marcas;
      },
      error: (error) => {
        console.error(error);
        this.messageService.add({severity:'error', summary: 'Ops!', detail: 'Ocorreu um erro ao buscar as marcas.'});
      }
    });
  }

  selectProduto(produto: Produto) {
    this.embalagem.produto = produto;
  }

  selectMarca(marca: Marca) {
    this.embalagem.marca = marca;
  }

  onSubmit(form: NgForm) {
    if (form.value.codigoEan) this.embalagem.codigoEan = undefined;

    this.embalagemService.save(this.embalagem).subscribe({
      next: (embalagem: Embalagem) => {
        this.messageService.add({severity:'success', summary: 'Sucesso!', detail: 'Embalagem salva com sucesso.'});
        form.resetForm();
      },
      error: (error) => {
        console.error(error);
        if (error instanceof HttpErrorResponse && error.status === 400) {
          error.error.errors.forEach((error: any) => {
            this.messageService.add({severity:'error', summary: 'Ops!', detail: error.defaultMessage});
          });
        } else {
          this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Erro ao salvar a embalagem.'});
        }
      }
    });
  }
}
