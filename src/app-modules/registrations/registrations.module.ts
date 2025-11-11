import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegistrationsService } from './registrations.service';
import { RegistrationsController } from './registrations.controller';
import { Registration } from './entities/registration.entity';

@Module({
  imports: [SequelizeModule.forFeature([Registration])],
  controllers: [RegistrationsController],
  providers: [RegistrationsService],
})
export class RegistrationsModule {}
