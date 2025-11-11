import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import { Registration } from '../../registrations/entities/registration.entity';
import { Speaker } from '../../speakers/entities/speaker.entity';
import { EventSpeaker } from '../../event-speakers/entities/event-speaker.entity';

@Table({
  tableName: 'events',
  timestamps: true,
})
export class Event extends Model<Event> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare end_date: Date;

  @HasMany(() => Registration)
  declare registrations: Registration[];

  @BelongsToMany(() => Speaker, () => EventSpeaker)
  declare speakers: Speaker[];
}
