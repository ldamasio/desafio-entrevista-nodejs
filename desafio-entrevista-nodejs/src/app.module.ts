import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CheckInModule } from './check-in/check-in.module';
import { CheckOutModule } from './check-out/check-out.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'drconsulta',
      password: 'kopPWsnF181YFlag',
      database: 'drconsulta',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CompaniesModule, 
    VehiclesModule, AuthModule, UsersModule, CheckInModule, CheckOutModule, ReportsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
