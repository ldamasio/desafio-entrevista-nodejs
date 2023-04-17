import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [AuthModule, CompaniesModule, VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
