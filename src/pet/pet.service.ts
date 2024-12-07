import { Injectable } from '@nestjs/common';
import { PetDto } from './pet.dto';

@Injectable()
export class PetService {
  private readonly pets: PetDto[] = [];

  constructor() {
    this.pets = this.getPets();
  }

  findAll(): PetDto[] {
    return this.pets;
  }

  findById(id: string): PetDto {
    return this.pets.find((pet) => pet.id === id);
  }

  create(pet: PetDto): PetDto {
    this.pets.push(pet);
    pet.id = '2';
    return pet;
  }

  private getPets(): PetDto[] {
    this.pets.push({
      id: '1',
      name: 'Ollie',
      color: 'black',
      gender: 'male',
      age: 2,
    });
    return this.pets;
  }
}
