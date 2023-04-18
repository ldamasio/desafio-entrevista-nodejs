import { PartialType } from '@nestjs/swagger';
import { CreateCheckOutDto } from './create-check-out.dto';

export class UpdateCheckOutDto extends PartialType(CreateCheckOutDto) {}
