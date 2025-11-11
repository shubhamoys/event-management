export const RESPONSE_MESSAGES = {
  SUCCESS: 'Request processed successfully',
  ATTENDEE_DASHBOARD_SUCCESS: 'Attendee dashboard retrieved successfully',
  ATTENDEE_NOT_FOUND: 'Attendee not found',
  INVALID_ATTENDEE_ID: 'Invalid attendee ID provided',
  SPEAKER_ATTENDEES_SUCCESS: 'Speaker attendees retrieved successfully',
  SPEAKER_NOT_FOUND: 'Speaker not found',
  INVALID_SPEAKER_ID: 'Invalid speaker ID provided',
  INTERNAL_SERVER_ERROR: 'Internal server error occurred',
};

export const STATUS_CODES = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export interface ApiResponse<T> {
  status: boolean;
  message: string;
  status_code: number;
  data: T | null;
}

export function createSuccessResponse<T>(
  data: T,
  message: string = RESPONSE_MESSAGES.SUCCESS,
  statusCode: number = STATUS_CODES.SUCCESS,
): ApiResponse<T> {
  return {
    status: true,
    message,
    status_code: statusCode,
    data,
  };
}

export function createErrorResponse(
  message: string,
  statusCode: number = STATUS_CODES.INTERNAL_SERVER_ERROR,
): ApiResponse<null> {
  return {
    status: false,
    message,
    status_code: statusCode,
    data: null,
  };
}
