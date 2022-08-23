import { Injectable } from '@nestjs/common';

import { Categorie } from '../entities/categorie.entiti';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categorie: Categorie[] = [
    {
      id: 1,
      name: 'Categorie ONE',
      description: 'Desccript ONE',
      image: '',
    },
  ];

  findAll() {
    return this.categorie;
  }

  findOne(id) {
    return this.categorie.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newCategorie = {
      id: this.counterId,
      ...payload,
    };
    this.categorie.push(newCategorie);
    return newCategorie;
  }

  update(id: number, payload: any) {
    const categorie = this.findOne(id);
    if (categorie) {
      const index = this.categorie.findIndex((item) => item.id === id);
      this.categorie[index] = {
        ...categorie,
        ...payload,
      };
      return this.categorie[index];
    }
    return 'Algo fallo';
  }
}
