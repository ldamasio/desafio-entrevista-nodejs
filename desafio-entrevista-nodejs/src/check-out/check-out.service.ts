import { Injectable } from '@nestjs/common';
import { CreateCheckOutDto } from './dto/create-check-out.dto';
import { UpdateCheckOutDto } from './dto/update-check-out.dto';

@Injectable()
export class CheckOutService {
  create(createCheckOutDto: CreateCheckOutDto) {
    return 'This action adds a new checkOut';
  }

  findAll() {
    return `This action returns all checkOut`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkOut`;
  }

  update(id: number, updateCheckOutDto: UpdateCheckOutDto) {
    return `This action updates a #${id} checkOut`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkOut`;
  }
}
