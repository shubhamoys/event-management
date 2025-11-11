import { Registration } from '../../app-modules/registrations/entities/registration.entity';

export class RegistrationsSeeder {
  static async seed() {
    try {
      const registrations = [
        // Rohit Sharma (Attendee 1) - Tech Innovation 2025 (Event 1)
        {
          attendee_id: 1,
          event_id: 1,
          registered_at: new Date('2025-10-15T10:30:00'),
        },

        // Rohit Sharma (Attendee 1) - AI & Machine Learning Summit (Event 2)
        {
          attendee_id: 1,
          event_id: 2,
          registered_at: new Date('2025-11-01T14:20:00'),
        },

        // Virat Kohli (Attendee 2) - Tech Innovation 2025 (Event 1)
        {
          attendee_id: 2,
          event_id: 1,
          registered_at: new Date('2025-10-16T09:15:00'),
        },

        // Virat Kohli (Attendee 2) - Web Development Conference 2025 (Event 3)
        {
          attendee_id: 2,
          event_id: 3,
          registered_at: new Date('2025-09-20T11:45:00'),
        },

        // Priya Singh (Attendee 3) - DevOps & Cloud Computing (Event 4)
        {
          attendee_id: 3,
          event_id: 4,
          registered_at: new Date('2025-08-25T16:00:00'),
        },

        // Priya Singh (Attendee 3) - Cybersecurity Workshop (Event 5)
        {
          attendee_id: 3,
          event_id: 5,
          registered_at: new Date('2025-08-10T13:30:00'),
        },

        // Ankit Verma (Attendee 4) - AI & Machine Learning Summit (Event 2)
        {
          attendee_id: 4,
          event_id: 2,
          registered_at: new Date('2025-11-02T10:00:00'),
        },

        // Sneha Patel (Attendee 5) - Tech Innovation 2025 (Event 1)
        {
          attendee_id: 5,
          event_id: 1,
          registered_at: new Date('2025-10-18T15:20:00'),
        },

        // Sneha Patel (Attendee 5) - Web Development Conference 2025 (Event 3)
        {
          attendee_id: 5,
          event_id: 3,
          registered_at: new Date('2025-09-22T12:00:00'),
        },
      ];

      await Registration.bulkCreate(registrations as any, {
        ignoreDuplicates: true,
      });
      console.log('✓ Registrations seeded successfully');
    } catch (error) {
      console.error('✗ Error seeding registrations:', error);
      throw error;
    }
  }
}
