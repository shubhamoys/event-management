import { EventSpeaker } from '../../app-modules/event-speakers/entities/event-speaker.entity';

export class EventSpeakersSeeder {
  static async seed() {
    try {
      const eventSpeakers = [
        // Tech Innovation 2025 (Event 1) - Speakers: Dr. Neha Verma (1), Amit Khanna (2)
        { event_id: 1, speaker_id: 1 },
        { event_id: 1, speaker_id: 2 },

        // AI & Machine Learning Summit (Event 2) - Speakers: Rajesh Kumar (3), Sunita Desai (4)
        { event_id: 2, speaker_id: 3 },
        { event_id: 2, speaker_id: 4 },

        // Web Development Conference 2025 (Event 3) - Speakers: Arjun Mehta (5), Dr. Neha Verma (1)
        { event_id: 3, speaker_id: 5 },
        { event_id: 3, speaker_id: 1 },

        // DevOps & Cloud Computing (Event 4) - Speakers: Amit Khanna (2), Rajesh Kumar (3)
        { event_id: 4, speaker_id: 2 },
        { event_id: 4, speaker_id: 3 },

        // Cybersecurity Workshop (Event 5) - Speaker: Sunita Desai (4)
        { event_id: 5, speaker_id: 4 },
      ];

      await EventSpeaker.bulkCreate(eventSpeakers as any, {
        ignoreDuplicates: true,
      });
      console.log('✓ Event-Speakers relationships seeded successfully');
    } catch (error) {
      console.error('✗ Error seeding event-speakers:', error);
      throw error;
    }
  }
}
