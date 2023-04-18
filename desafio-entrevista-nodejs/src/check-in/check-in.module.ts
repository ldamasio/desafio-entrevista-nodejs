import { Module } from '@nestjs/common';
import { CheckInService } from './check-in.service';
import { CheckInController } from './check-in.controller';

@Module({
  controllers: [CheckInController],
  providers: [CheckInService]
})
export class CheckInModule {}
