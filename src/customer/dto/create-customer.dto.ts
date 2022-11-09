import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  age: number;

  @IsBoolean()
  life: boolean;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly postalCode: number;

  @IsString()
  @IsNotEmpty()
  readonly city: string;
}
