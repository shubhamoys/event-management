import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventSpeakersService } from './event-speakers.service';
import { CreateEventSpeakerDto } from './dto/create-event-speaker.dto';
import { UpdateEventSpeakerDto } from './dto/update-event-speaker.dto';

@Controller('event-speakers')
export class EventSpeakersController {
  constructor(private readonly eventSpeakersService: EventSpeakersService) {}

  @Post()
  create(@Body() createEventSpeakerDto: CreateEventSpeakerDto) {
    return this.eventSpeakersService.create(createEventSpeakerDto);
  }

  @Get()
  findAll() {
    return this.eventSpeakersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventSpeakersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventSpeakerDto: UpdateEventSpeakerDto) {
    return this.eventSpeakersService.update(+id, updateEventSpeakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventSpeakersService.remove(+id);
  }
}
