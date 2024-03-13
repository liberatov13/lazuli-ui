import { Component, OnInit } from '@angular/core';
import { EmbalagemService } from "../../../service/embalagem/embalagem.service";
import { Embalagem } from "../../../domain/embalagem";
import { Message, MessageService } from "primeng/api";

@Component({
  selector: 'app-embalagem-list',
  templateUrl: './embalagem-list.component.html',
  styleUrls: ['./embalagem-list.component.css'],
  providers: [MessageService]
})
export class EmbalagemListComponent implements OnInit {

  embalagens: Embalagem[] = [];

  isLoading: boolean = false;
  messages: Message[] = [];

  constructor(private embalagemService: EmbalagemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.embalagemService.findAll().subscribe({
      next: (embalagens: Embalagem[]) => {
        this.embalagens = embalagens;
      },
      error: (error: any) => {
        console.error(error);
        this.messageService.add({severity: 'error', summary: 'Ops!', detail: 'Ocorreu um erro ao consultar as embalagens'})
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
