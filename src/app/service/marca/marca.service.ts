import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Marca } from "../../domain/marca";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url: string = `${environment.apiUrl}/marcas`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.url);
  }

  save(marca: Marca): Observable<Marca> {
    return this.http.post(this.url, marca);
  }

  findById(idMarca: number): Observable<Marca> {
    return this.http.get(`${this.url}/${idMarca}`);
  }

  autocomplete(query: string): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.url}/autocomplete?term=${query}`);
  }
}
