import { Component } from '@angular/core';
import { Message, MessageService } from "primeng/api";
import { UnidadeMedida } from "../../../domain/unidade-medida";
import { UnidadeMedidaService } from "../../../service/unidade-medida/unidade-medida.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-unidade-medida-form',
  templateUrl: './unidade-medida-form.component.html',
  styleUrls: ['./unidade-medida-form.component.css'],
  providers: [MessageService]
})
export class UnidadeMedidaFormComponent {

  unidadeMedida: UnidadeMedida = new UnidadeMedida();

  messages: Message[] = [];

  constructor(private unidadeMedidaService: UnidadeMedidaService, private messageService: MessageService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.unidadeMedidaService.save(this.unidadeMedida).subscribe({
        next: (response: UnidadeMedida) => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: `Unidade de medida salva com sucesso! Código ${response.idUnidadeMedida}` });
          this.unidadeMedida = new UnidadeMedida();
        },
        error: (error) => {
          console.error(error);
          this.messageService.add({severity: 'error', summary: 'Ops', detail: 'Ocorreu um erro ao salvar unidade de medida!'});
        }
      });
    } else {
      this.messageService.add({severity: 'warning', summary: 'Hey!', detail: 'Há informações inválidas!'});
    }
  }

}
