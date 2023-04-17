import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle) private readonly repository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.repository.save(createVehicleDto);
  }

  findAll(): Promise<Vehicle[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Vehicle> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateVehicleDto: UpdateVehicleDto): Promise<Vehicle> {
    const vehicle = await this.repository.preload({
      id: id,
      ...updateVehicleDto,
    });
    if (!Vehicle) {
      throw new NotFoundException(`Company ${vehicle} not found`);
    }
    return this.repository.save(vehicle);
  }

  async remove(id: number) {
    const vehicle = await this.findOne(id);
    return this.repository.remove(vehicle);
  }
}
