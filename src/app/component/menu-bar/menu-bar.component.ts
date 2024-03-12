import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  menus: MenuItem[] = [];

  ngOnInit(): void {
    this.menus = [
      {
        label: "Produtos",
        icon: "fa fa-cookie-bite",
        items: [
          {
            label: "Produto",
            routerLink: 'produto',
          },
          {
            label: "Marca",
            routerLink: 'marca',
          },
          {
            label: "Unidade de Medida",
            routerLink: 'unidade-medida',
          },
          {
            label: "Embalagem",
            routerLink: 'embalagem',
          },
          {
            label: "Receita",
            items: [
              {label: "Cadastro", routerLink: 'receita/cadastrar'},
              {label: "Lista", routerLink: 'receita'},
            ],
            disabled: true
          },
          {label: "Tipo de Produto", routerLink: 'tipo-produto'},
        ]
      },
      {
        label: "Venda",
        icon: "fa fa-cart-shopping",
        items: [
          {label: "Registrar", routerLink: 'venda/registrar'},
          {label: "Lista", routerLink: 'venda/listar'},
        ],
        disabled: true
      },
      {
        label: "Compra",
        icon: "fa fa-shop",
        items: [
          {label: "Cadastrar", routerLink: 'compra/cadastrar'},
          {label: "Lista", routerLink: 'compra/listar'},
        ],
        disabled: true
      },
      {
        label: "Relatório",
        icon: "fa fa-chart-simple",
        disabled: true
      }
    ]
  }

}
