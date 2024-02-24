import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { TipoProduto } from "../../domain/tipo-produto";

@Injectable({
  providedIn: 'root'
})
export class TipoProdutoService {

  private endpoint: string = `${environment.apiUrl}/tipos-produto`;

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<TipoProduto[]> {
    return this.http.get<TipoProduto[]>(this.endpoint);
  }

  save(tipoProduto: TipoProduto): Observable<TipoProduto> {
    return this.http.post<TipoProduto>(this.endpoint, tipoProduto);
  }

  delete(idTipoProduto: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${idTipoProduto}`);
  }
}
