import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategorietDto } from 'src/categories/dto/categories.dto';

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
    const categorie = this.categorie.find((item) => item.id === id);
    if (!categorie) {
      throw new NotAcceptableException(`Categorie not exist`);
    }
    return categorie;
  }

  create(payload: CreateCategorietDto) {
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
    return new NotAcceptableException('Random Error');
  }

  remove(id: number) {
    const index = this.categorie.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Categorie not exist`);
    }
    this.categorie.splice(index, 1);
    return {
      message: 'DELETE CATEG',
    };
  }
}
