import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn
 } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ length: 255 })
  brand: string;

  @Column({ length: 255 })
  model: string;

  @Column({ length: 30 })
  color: string;

  @Column({ length: 30 })
  plate: string;

  @Column({ length: 30 })
  type: string;
}
