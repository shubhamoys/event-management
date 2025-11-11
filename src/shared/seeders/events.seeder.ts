import { Event } from '../../app-modules/events/entities/event.entity';

export class EventsSeeder {
  static async seed() {
    try {
      const events = [
        {
          title: 'Tech Innovation 2025',
          description: 'A deep dive into modern tech trends',
          start_date: new Date('2025-11-20'),
          end_date: new Date('2025-11-22'),
        },
        {
          title: 'AI & Machine Learning Summit',
          description: 'Exploring the future of artificial intelligence and machine learning',
          start_date: new Date('2025-12-05'),
          end_date: new Date('2025-12-07'),
        },
        {
          title: 'Web Development Conference 2025',
          description: 'Latest trends and best practices in web development',
          start_date: new Date('2025-10-15'),
          end_date: new Date('2025-10-17'),
        },
        {
          title: 'DevOps & Cloud Computing',
          description: 'Mastering DevOps practices and cloud infrastructure',
          start_date: new Date('2025-09-10'),
          end_date: new Date('2025-09-12'),
        },
        {
          title: 'Cybersecurity Workshop',
          description: 'Understanding modern cybersecurity threats and solutions',
          start_date: new Date('2025-08-25'),
          end_date: new Date('2025-08-26'),
        },
      ];

      await Event.bulkCreate(events as any, {
        ignoreDuplicates: true,
      });
      console.log('✓ Events seeded successfully');
    } catch (error) {
      console.error('✗ Error seeding events:', error);
      throw error;
    }
  }
}
