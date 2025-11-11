import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Registration } from '../../registrations/entities/registration.entity';

@Table({
  tableName: 'attendees',
  timestamps: true,
})
export class Attendee extends Model<Attendee> {
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

  @HasMany(() => Registration)
  declare registrations: Registration[];
}
