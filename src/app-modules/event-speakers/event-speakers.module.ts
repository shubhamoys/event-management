import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventSpeakersService } from './event-speakers.service';
import { EventSpeakersController } from './event-speakers.controller';
import { EventSpeaker } from './entities/event-speaker.entity';

@Module({
  imports: [SequelizeModule.forFeature([EventSpeaker])],
  controllers: [EventSpeakersController],
  providers: [EventSpeakersService],
})
export class EventSpeakersModule {}
