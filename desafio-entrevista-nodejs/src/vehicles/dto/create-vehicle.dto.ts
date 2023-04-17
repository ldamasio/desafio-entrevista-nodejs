import { IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  plate: string;

  @IsNotEmpty()
  type: string;
}
