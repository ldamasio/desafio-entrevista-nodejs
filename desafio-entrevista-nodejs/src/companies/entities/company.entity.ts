import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn
 } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 30 })
  cnpj: string;

  @Column({ length: 500 })
  address: string;

  @Column({ length: 50 })
  phone: string;

  @Column()
  qty_motorcycles: number;

  @Column()
  qty_cars: number;

}
