import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Event } from '../../events/entities/event.entity';
import { EventSpeaker } from '../../event-speakers/entities/event-speaker.entity';

@Table({
  tableName: 'speakers',
  timestamps: true,
})
export class Speaker extends Model<Speaker> {
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
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @BelongsToMany(() => Event, () => EventSpeaker)
  declare events: Event[];
}
