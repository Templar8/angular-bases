import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name:"Krillin",
    power: 1000
  },
  {
    id: uuid(),
    name: "Goku",
    power: 9500
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }];


addCharacter(character: Character): void{
  const newCharacter: Character = { id: uuid(), ...character}; //Otra forma de asignar el Id copiando todo lo que llega a un objeto nuevo
  character.id = uuid();
  this.characters.push(character);
}

//onDeleteCharacter(index: number){
//  this.characters.splice(index, 1);
//}

deleteCharacterById(id:string){
  this.characters = this.characters.filter(character=> character.id !== id);
}

}
