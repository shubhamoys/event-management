import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SpeakersService } from './speakers.service';
import { SpeakersController } from './speakers.controller';
import { Speaker } from './entities/speaker.entity';

@Module({
  imports: [SequelizeModule.forFeature([Speaker])],
  controllers: [SpeakersController],
  providers: [SpeakersService],
})
export class SpeakersModule {}
