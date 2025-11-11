import { Injectable } from '@nestjs/common';
import { CreateEventSpeakerDto } from './dto/create-event-speaker.dto';
import { UpdateEventSpeakerDto } from './dto/update-event-speaker.dto';

@Injectable()
export class EventSpeakersService {
  create(createEventSpeakerDto: CreateEventSpeakerDto) {
    return 'This action adds a new eventSpeaker';
  }

  findAll() {
    return `This action returns all eventSpeakers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventSpeaker`;
  }

  update(id: number, updateEventSpeakerDto: UpdateEventSpeakerDto) {
    return `This action updates a #${id} eventSpeaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventSpeaker`;
  }
}
