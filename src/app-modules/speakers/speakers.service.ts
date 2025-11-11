import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSpeakerDto } from './dto/create-speaker.dto';
import { UpdateSpeakerDto } from './dto/update-speaker.dto';
import { Speaker } from './entities/speaker.entity';
import { Event } from '../events/entities/event.entity';
import { Registration } from '../registrations/entities/registration.entity';
import { Attendee } from '../attendees/entities/attendee.entity';
import {
  ApiResponse,
  createSuccessResponse,
  createErrorResponse,
  RESPONSE_MESSAGES,
  STATUS_CODES,
} from '../../shared/constants/response.constants';

@Injectable()
export class SpeakersService {
  constructor(
    @InjectModel(Speaker)
    private speakerModel: typeof Speaker,
  ) {}

  create(createSpeakerDto: CreateSpeakerDto) {
    return 'This action adds a new speaker';
  }

  findAll() {
    return `This action returns all speakers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speaker`;
  }

  update(id: number, updateSpeakerDto: UpdateSpeakerDto) {
    return `This action updates a #${id} speaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} speaker`;
  }

  async getSpeakerAttendees(id: number): Promise<ApiResponse<any>> {
    try {
      // Validate ID
      if (!id || isNaN(id)) {
        return createErrorResponse(
          RESPONSE_MESSAGES.INVALID_SPEAKER_ID,
          STATUS_CODES.BAD_REQUEST,
        );
      }

      // Fetch speaker with nested associations
      const speaker = await this.speakerModel.findByPk(id, {
        attributes: ['name', 'email'],
        include: [
          {
            model: Event,
            attributes: ['title'],
            through: { attributes: [] },
            include: [
              {
                model: Registration,
                attributes: ['id'],
                include: [
                  {
                    model: Attendee,
                    attributes: ['name', 'email'],
                  },
                ],
              },
            ],
          },
        ],
      });

      // Check if speaker exists
      if (!speaker) {
        return createErrorResponse(
          RESPONSE_MESSAGES.SPEAKER_NOT_FOUND,
          STATUS_CODES.NOT_FOUND,
        );
      }

      // Transform data to match the expected format
      const events =
        speaker.events && speaker.events.length > 0
          ? speaker.events.map((event) => ({
              title: event.title,
              attendees:
                event.registrations && event.registrations.length > 0
                  ? event.registrations.map((registration) => ({
                      name: registration.attendee.name,
                      email: registration.attendee.email,
                    }))
                  : [],
            }))
          : [];

      const speakerData = {
        speaker: {
          name: speaker.name,
          email: speaker.email,
        },
        events,
      };

      return createSuccessResponse(
        speakerData,
        RESPONSE_MESSAGES.SPEAKER_ATTENDEES_SUCCESS,
        STATUS_CODES.SUCCESS,
      );
    } catch (error) {
      console.error('Error fetching speaker attendees:', error);
      return createErrorResponse(
        RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
        STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
