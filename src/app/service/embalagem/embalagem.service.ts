import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Embalagem } from "../../domain/embalagem";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmbalagemService {

  url: string = environment.apiUrl + "/embalagens";

  constructor(private http: HttpClient) { }

  findAll(): Observable<Embalagem[]> {
    return this.http.get<Embalagem[]>(this.url).pipe(
      map((value: Embalagem[]) => {
        return value.map((embalagem: Embalagem) => {
          embalagem.dataCadastro = embalagem.dataCadastro? new Date(embalagem.dataCadastro) : undefined;
          return embalagem;
        })
      })
    );
  }

  save(embalagem: Embalagem): Observable<Embalagem> {
    const body = {
      produto: embalagem.produto?.idProduto,
      marca: embalagem.marca?.idMarca,
      unidadeMedida: embalagem.unidadeMedida?.idUnidadeMedida,
      quantidade: embalagem.quantidade,
      codigoEan: embalagem.codigoEan,
    }
    return this.http.post<Embalagem>(this.url, body);
  }
}
