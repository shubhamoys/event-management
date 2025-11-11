import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Event } from '../../events/entities/event.entity';
import { Speaker } from '../../speakers/entities/speaker.entity';

@Table({
  tableName: 'event_speakers',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['event_id', 'speaker_id'],
    },
  ],
})
export class EventSpeaker extends Model<EventSpeaker> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare event_id: number;

  @ForeignKey(() => Speaker)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare speaker_id: number;
}
