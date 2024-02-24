import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TipoProduto } from "../../../domain/tipo-produto";
import { TipoProdutoService } from "../../../service/tipo-produto/tipo-produto.service";
import { Message, MessageService } from "primeng/api";

@Component({
  selector: 'app-tipo-produto-form',
  templateUrl: './tipo-produto-form.component.html',
  styleUrls: ['./tipo-produto-form.component.css'],
  providers: [MessageService]
})
export class TipoProdutoFormComponent {

  tipoProduto: TipoProduto = new TipoProduto();

  messages: Message[] = new Array<Message>();

  constructor(private tipoProdutoService: TipoProdutoService, private messageService: MessageService) {
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.tipoProdutoService.save(this.tipoProduto).subscribe({
        next: (response: TipoProduto): void => {
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: `Tipo de produto salvo com código ${response.idTipoProduto}`});
          form.reset();
        },
        error: (error) => {
          console.error(error);
          this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Erro ao salvar tipo de produto!'});
        }
      });
    } else {
      this.messageService.add({severity: 'warning', summary: 'Ops!', detail: 'O formulário parece estar com informações inválidas'})
    }
  }
}
