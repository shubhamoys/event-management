import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { AttendeesSeeder } from './attendees.seeder';
import { SpeakersSeeder } from './speakers.seeder';
import { EventsSeeder } from './events.seeder';
import { EventSpeakersSeeder } from './event-speakers.seeder';
import { RegistrationsSeeder } from './registrations.seeder';

async function runSeeders() {
  console.log('Starting database seeding...\n');

  try {
    // Initialize NestJS application to ensure database connection
    const app = await NestFactory.createApplicationContext(AppModule);

    // Run seeders in order (respecting foreign key constraints)
    console.log('1. Seeding Attendees...');
    await AttendeesSeeder.seed();

    console.log('2. Seeding Speakers...');
    await SpeakersSeeder.seed();

    console.log('3. Seeding Events...');
    await EventsSeeder.seed();

    console.log('4. Seeding Event-Speakers relationships...');
    await EventSpeakersSeeder.seed();

    console.log('5. Seeding Registrations...');
    await RegistrationsSeeder.seed();

    console.log('\n✓ All seeders completed successfully!');
    await app.close();
    process.exit(0);
  } catch (error) {
    console.error('\n✗ Seeding failed:', error);
    process.exit(1);
  }
}

runSeeders();
