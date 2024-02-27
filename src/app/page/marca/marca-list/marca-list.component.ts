import { Component, OnInit } from '@angular/core';
import { Marca } from "../../../domain/marca";
import { MarcaService } from "../../../service/marca/marca.service";
import { Message, MessageService } from "primeng/api";

@Component({
  selector: 'app-marca-list',
  templateUrl: './marca-list.component.html',
  styleUrls: ['./marca-list.component.css'],
  providers: [MessageService]
})
export class MarcaListComponent implements OnInit {

  marcas: Marca[] = [];

  isLoading: boolean = false;
  messages: Message[] = [];

  constructor(private marcaService: MarcaService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.marcaService.findAll().subscribe({
      next: (marcas: Marca[]) => {
        this.marcas = marcas;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error(error);
        this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao carregar marcas'});
        this.isLoading = false;
      }
    });
  }

}
