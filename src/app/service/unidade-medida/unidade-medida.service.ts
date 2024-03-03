import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { UnidadeMedida } from "../../domain/unidade-medida";

@Injectable({
  providedIn: 'root'
})
export class UnidadeMedidaService {

  url: string = environment.apiUrl + "/unidades-medida";

  constructor(private http: HttpClient) { }

  findAll(): Observable<UnidadeMedida[]> {
    return this.http.get<UnidadeMedida[]>(this.url);
  }

  delete(idUnidadeMedida: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${idUnidadeMedida}`);
  }
}
