import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Attendee } from '../../attendees/entities/attendee.entity';
import { Event } from '../../events/entities/event.entity';

@Table({
  tableName: 'registrations',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['attendee_id', 'event_id'],
    },
  ],
})
export class Registration extends Model<Registration> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Attendee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare attendee_id: number;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare event_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  declare registered_at: Date;

  @BelongsTo(() => Attendee)
  declare attendee: Attendee;

  @BelongsTo(() => Event)
  declare event: Event;
}
