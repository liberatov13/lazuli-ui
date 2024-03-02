import { Component } from '@angular/core';
import { MarcaService } from "../../../service/marca/marca.service";
import { Message, MessageService } from "primeng/api";
import { Marca } from "../../../domain/marca";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css'],
  providers: [MessageService]
})
export class MarcaFormComponent {

  marca: Marca = new Marca();

  messages: Message[] = [];
  isLoading: boolean = false;

  constructor(private marcaService: MarcaService, private messageService: MessageService) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      this.messageService.clear()
      this.marca.status = form.value.status ?? false

      this.marcaService.save(this.marca).subscribe({
        next: (marcaResponse: Marca) => {
          this.messageService.add({severity: 'success', summary: 'Sucesso', detail: `Marca cadastrada com sucesso! Código: ${marcaResponse.idMarca}`});
          form.reset();
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
          this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao cadastrar marca!'});
        }
      })
    } else {
      this.messageService.add({severity: 'warning', summary: 'Hey!', detail: 'Há informações inválidas'});
    }
  }

}
