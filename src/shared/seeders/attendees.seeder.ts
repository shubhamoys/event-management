import { Attendee } from '../../app-modules/attendees/entities/attendee.entity';

export class AttendeesSeeder {
  static async seed() {
    try {
      const attendees = [
        {
          name: 'Rohit Sharma',
          email: 'rohit@example.com',
        },
        {
          name: 'Virat Kohli',
          email: 'virat@example.com',
        },
        {
          name: 'Priya Singh',
          email: 'priya.singh@example.com',
        },
        {
          name: 'Ankit Verma',
          email: 'ankit.verma@example.com',
        },
        {
          name: 'Sneha Patel',
          email: 'sneha.patel@example.com',
        },
      ];

      await Attendee.bulkCreate(attendees as any, {
        ignoreDuplicates: true,
      });
      console.log('✓ Attendees seeded successfully');
    } catch (error) {
      console.error('✗ Error seeding attendees:', error);
      throw error;
    }
  }
}
