import {
  // HttpCode,
  // HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/products.dto';

import { Product } from '../entities/product.entities';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Notbook Acer Aspire One',
      description:
        'Se trata de una computadora portátil con la forma y tamaño de una libreta escolar tamaño profesional, que contiene los mismos componentes que una de escritorio, pero con ciertas modificaciones en sus dimensiones, por lo que resulta un gabinete muy delgado y con la pantalla, teclado y ratón integrados.',
      price: 10000,
      image: '',
      stock: 10,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not exist`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return 'Algo fallo';
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product ${id} not exist`);
    }
    this.products.splice(index, 1);
    return {
      message: 'DELETE',
    };
  }
}
