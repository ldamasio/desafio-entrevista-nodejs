import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private readonly repository: Repository<Company>,
  ) {}
  
  create(createCompanyDto: CreateCompanyDto) {
    return this.repository.save(createCompanyDto);
  }

  findAll(): Promise<Company[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Company> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.repository.preload({
      id: id,
      ...updateCompanyDto,
    });
    if (!Company) {
      throw new NotFoundException(`Company ${company} not found`);
    }
    return this.repository.save(company);
  }

  async remove(id: number) {
    const company = await this.findOne(id);
    return this.repository.remove(company);
  }

}
