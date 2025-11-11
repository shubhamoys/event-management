import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendeesService } from './attendees.service';
import { AttendeesController } from './attendees.controller';
import { Attendee } from './entities/attendee.entity';

@Module({
  imports: [SequelizeModule.forFeature([Attendee])],
  controllers: [AttendeesController],
  providers: [AttendeesService],
})
export class AttendeesModule {}
