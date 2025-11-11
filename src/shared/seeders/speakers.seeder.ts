import { Speaker } from '../../app-modules/speakers/entities/speaker.entity';

export class SpeakersSeeder {
  static async seed() {
    try {
      const speakers = [
        {
          name: 'Dr. Neha Verma',
          email: 'neha.verma@example.com',
        },
        {
          name: 'Amit Khanna',
          email: 'amit.k@example.com',
        },
        {
          name: 'Rajesh Kumar',
          email: 'rajesh.kumar@example.com',
        },
        {
          name: 'Sunita Desai',
          email: 'sunita.desai@example.com',
        },
        {
          name: 'Arjun Mehta',
          email: 'arjun.mehta@example.com',
        },
      ];

      await Speaker.bulkCreate(speakers as any, {
        ignoreDuplicates: true,
      });
      console.log('✓ Speakers seeded successfully');
    } catch (error) {
      console.error('✗ Error seeding speakers:', error);
      throw error;
    }
  }
}
