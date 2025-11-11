import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAttendeeDto } from './dto/create-attendee.dto';
import { UpdateAttendeeDto } from './dto/update-attendee.dto';
import { Attendee } from './entities/attendee.entity';
import { Registration } from '../registrations/entities/registration.entity';
import { Event } from '../events/entities/event.entity';
import { Speaker } from '../speakers/entities/speaker.entity';
import {
  ApiResponse,
  createSuccessResponse,
  createErrorResponse,
  RESPONSE_MESSAGES,
  STATUS_CODES,
} from '../../shared/constants/response.constants';

@Injectable()
export class AttendeesService {
  constructor(
    @InjectModel(Attendee)
    private attendeeModel: typeof Attendee,
  ) {}

  create(createAttendeeDto: CreateAttendeeDto) {
    return 'This action adds a new attendee';
  }

  findAll() {
    return `This action returns all attendees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendee`;
  }

  update(id: number, updateAttendeeDto: UpdateAttendeeDto) {
    return `This action updates a #${id} attendee`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendee`;
  }

  async getDashboard(id: number): Promise<ApiResponse<any>> {
    try {
      // Validate ID
      if (!id || isNaN(id)) {
        return createErrorResponse(
          RESPONSE_MESSAGES.INVALID_ATTENDEE_ID,
          STATUS_CODES.BAD_REQUEST,
        );
      }

      // Fetch attendee with nested associations
      const attendee = await this.attendeeModel.findByPk(id, {
        attributes: ['name', 'email'],
        include: [
          {
            model: Registration,
            attributes: ['id', 'registered_at'],
            include: [
              {
                model: Event,
                attributes: ['title', 'description', 'start_date', 'end_date'],
                include: [
                  {
                    model: Speaker,
                    attributes: ['name', 'email'],
                    through: { attributes: [] },
                  },
                ],
              },
            ],
          },
        ],
      });

      // Check if attendee exists
      if (!attendee) {
        return createErrorResponse(
          RESPONSE_MESSAGES.ATTENDEE_NOT_FOUND,
          STATUS_CODES.NOT_FOUND,
        );
      }

      // Transform data to match the expected format
      const events =
        attendee.registrations && attendee.registrations.length > 0
          ? attendee.registrations.map((registration) => ({
              title: registration.event.title,
              description: registration.event.description,
              start_date: registration.event.start_date,
              end_date: registration.event.end_date,
              speakers: registration.event.speakers
                ? registration.event.speakers.map((speaker) => ({
                    name: speaker.name,
                    email: speaker.email,
                  }))
                : [],
            }))
          : [];

      const dashboardData = {
        attendee: {
          name: attendee.name,
          email: attendee.email,
        },
        events,
      };

      return createSuccessResponse(
        dashboardData,
        RESPONSE_MESSAGES.ATTENDEE_DASHBOARD_SUCCESS,
        STATUS_CODES.SUCCESS,
      );
    } catch (error) {
      console.error('Error fetching attendee dashboard:', error);
      return createErrorResponse(
        RESPONSE_MESSAGES.INTERNAL_SERVER_ERROR,
        STATUS_CODES.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
