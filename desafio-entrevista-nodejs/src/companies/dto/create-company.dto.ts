import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cnpj: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  qty_motorcycles: number;

  @IsNotEmpty()
  qty_cars: number;
}
