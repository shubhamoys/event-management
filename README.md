# Event Management System API

A REST API for managing attendees, events, speakers, and registrations built with NestJS, MySQL/MariaDB, and Sequelize ORM.

## Project Setup

### 1. Clone the Repository

```bash
git clone git@github.com:shubhamoys/event-management.git
cd event-management-backend
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Update the `.env` file with your database credentials:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=event_management
DB_DIALECT=mysql
```

### 3. Create Database

```sql
CREATE DATABASE event_management;
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Run Database Seeders

```bash
npm run seed
```

### 6. Start the Application

```bash
# Development mode with watch
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`

## Project Overview

### Database Schema

**attendees**
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| name | VARCHAR | Attendee name |
| email | VARCHAR | Attendee email |
| createdAt | TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | Update timestamp |

**events**
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| title | VARCHAR | Event title |
| description | TEXT | Event description |
| start_date | DATE | Event start date |
| end_date | DATE | Event end date |
| createdAt | TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | Update timestamp |

**speakers**
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| name | VARCHAR | Speaker name |
| email | VARCHAR | Speaker email |
| createdAt | TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | Update timestamp |

**registrations**
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| attendee_id | INTEGER | Foreign Key to attendees |
| event_id | INTEGER | Foreign Key to events |
| registered_at | TIMESTAMP | Registration timestamp |
| createdAt | TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | Update timestamp |

**event_speakers**
| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| event_id | INTEGER | Foreign Key to events |
| speaker_id | INTEGER | Foreign Key to speakers |
| createdAt | TIMESTAMP | Creation timestamp |
| updatedAt | TIMESTAMP | Update timestamp |

### Project Structure

```
src/
├── app-modules/              # Application modules
│   ├── attendees/           # Attendees module
│   │   ├── entities/
│   │   ├── dto/
│   │   ├── attendees.controller.ts
│   │   ├── attendees.service.ts
│   │   └── attendees.module.ts
│   ├── events/              # Events module
│   ├── registrations/       # Registrations module
│   ├── speakers/            # Speakers module
│   └── event-speakers/      # Event-Speakers module
│
├── shared/                   # Shared resources
│   ├── config/              # Configuration files
│   ├── constants/           # Constants and response helpers
│   └── seeders/             # Database seeders
│
├── app.module.ts            # Root module
├── app.controller.ts        # Root controller
├── app.service.ts           # Root service
└── main.ts                  # Application entry point
```

## API Endpoints

### 1. Get Attendee Dashboard

```http
GET /attendees/:id/dashboard
```

**Description:** Returns a specific attendee's dashboard showing all events they registered for and the speakers assigned to each event.

**Response:**

```json
{
  "status": true,
  "message": "Attendee dashboard retrieved successfully",
  "status_code": 200,
  "data": {
    "attendee": {
      "name": "Rohit Sharma",
      "email": "rohit@example.com"
    },
    "events": [
      {
        "title": "Tech Innovation 2025",
        "description": "A deep dive into modern tech trends",
        "start_date": "2025-11-20",
        "end_date": "2025-11-22",
        "speakers": [
          {
            "name": "Dr. Neha Verma",
            "email": "neha.verma@example.com"
          },
          {
            "name": "Amit Khanna",
            "email": "amit.k@example.com"
          }
        ]
      }
    ]
  }
}
```

### 2. Get Speaker's Attendees

```http
GET /speakers/:id/attendees
```

**Description:** Returns a specific speaker's details along with all events they're speaking at and the attendees registered for those events.

**Response:**

```json
{
  "status": true,
  "message": "Speaker attendees retrieved successfully",
  "status_code": 200,
  "data": {
    "speaker": {
      "name": "Amit Khanna",
      "email": "amit.k@example.com"
    },
    "events": [
      {
        "title": "Tech Innovation 2025",
        "attendees": [
          {
            "name": "Rohit Sharma",
            "email": "rohit@example.com"
          },
          {
            "name": "Virat Kohli",
            "email": "virat@example.com"
          }
        ]
      }
    ]
  }
}
```
