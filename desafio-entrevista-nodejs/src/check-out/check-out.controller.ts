import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckOutService } from './check-out.service';
import { CreateCheckOutDto } from './dto/create-check-out.dto';
import { UpdateCheckOutDto } from './dto/update-check-out.dto';

@Controller('check-out')
export class CheckOutController {
  constructor(private readonly checkOutService: CheckOutService) {}

  @Post()
  create(@Body() createCheckOutDto: CreateCheckOutDto) {
    return this.checkOutService.create(createCheckOutDto);
  }

  @Get()
  findAll() {
    return this.checkOutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkOutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckOutDto: UpdateCheckOutDto) {
    return this.checkOutService.update(+id, updateCheckOutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkOutService.remove(+id);
  }
}
