import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../../../Services/api.service';
import { tap } from 'rxjs';
import { Pokemon } from '../../../Models/pokemon';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  constructor(private apiService: ApiService) {}
  pokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.apiService.getPokemons().subscribe({
      next: (response) => {
        if (response.status) {
          alert("El mensaje fue enviado correctamente");
          this.pokemons = response.data;
          console.log("Los pokemons son: ", this.pokemons);
        } else {
          console.log("La respuesta no contiene un estado válido.");
        }
      },
      error: (err) => {
        console.error("Algo salió mal:", err);
      }
    });
  }
  

}
