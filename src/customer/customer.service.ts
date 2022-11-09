import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      age: 25,
      life: true,
      address: '27 de abril',
      postalCode: 10021,
      city: 'New York',
    },
  ];

  create(payload: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.customers;
  }

  findOne(id) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer ${id} not exist`);
    }
    return customer;
  }

  update(id: number, payload: any) {
    const customer = this.findOne(id);
    if (customer) {
      const index = this.customers.findIndex((item) => item.id === id);
      this.customers[index] = {
        ...customer,
        ...payload,
      };
      return this.customers[index];
    }
    return 'algo fallo';
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Customer ${id} not exist`);
    }
    this.customers.splice(index, 1);
    return {
      message: 'DELETE',
    };
  }
}
