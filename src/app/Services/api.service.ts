import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../Models/pokemon';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(readonly httpClient:HttpClient) {}

  getPokemons():Observable<any>{
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    return this.httpClient.get<any>(url);
  }

}
