import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendeesModule } from './app-modules/attendees/attendees.module';
import { EventsModule } from './app-modules/events/events.module';
import { RegistrationsModule } from './app-modules/registrations/registrations.module';
import { SpeakersModule } from './app-modules/speakers/speakers.module';
import { EventSpeakersModule } from './app-modules/event-speakers/event-speakers.module';
import { Attendee } from './app-modules/attendees/entities/attendee.entity';
import { Event } from './app-modules/events/entities/event.entity';
import { Registration } from './app-modules/registrations/entities/registration.entity';
import { Speaker } from './app-modules/speakers/entities/speaker.entity';
import { EventSpeaker } from './app-modules/event-speakers/entities/event-speaker.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Attendee, Event, Registration, Speaker, EventSpeaker],
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    AttendeesModule,
    EventsModule,
    RegistrationsModule,
    SpeakersModule,
    EventSpeakersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
