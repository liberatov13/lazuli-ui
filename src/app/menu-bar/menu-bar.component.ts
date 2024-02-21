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
        label: "Produto",
        icon: "fa fa-cookie-bite",
        items: [
          {label: "Cadastrar", routerLink: 'produto/cadastrar'},
          {label: "Lista", routerLink: 'produto/listar'},
        ]
      },
      {
        label: "Venda",
        icon: "fa fa-cart-shopping",
        items: [
          {label: "Registrar", routerLink: 'venda/registrar'},
          {label: "Lista", routerLink: 'venda/listar'},
        ]
      },
      {
        label: "Compra",
        icon: "fa fa-shop",
        items: [
          {label: "Cadastrar", routerLink: 'compra/cadastrar'},
          {label: "Lista", routerLink: 'compra/listar'},
        ]
      },
      {
        label: "Relatório",
        icon: "fa fa-chart-simple"
      }
    ]
  }

}
