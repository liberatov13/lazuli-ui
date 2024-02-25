import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Produto } from "../../domain/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  url: string = `${environment.apiUrl}/produtos`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.url}/${id}`);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  disable(id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}/desativar`, null);
  }

  activate(id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}/ativar`, null);
  }
}
