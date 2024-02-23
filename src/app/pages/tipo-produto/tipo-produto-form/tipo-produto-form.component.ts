import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TipoProduto } from "../../../../domain/tipo-produto";

@Component({
  selector: 'app-tipo-produto-form',
  templateUrl: './tipo-produto-form.component.html',
  styleUrls: ['./tipo-produto-form.component.css'],
})
export class TipoProdutoFormComponent {

  tipoProduto: TipoProduto = new TipoProduto();

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
