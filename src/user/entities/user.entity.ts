import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({
    length: 50,
  })
  first_name: string;

  @Column({
    length: 50,
  })
  last_name: string;

  @Column({
    length: 20,
  })
  phone: string;

  @Column({nullable:true})
  date_of_birth: string;

  @Column({nullable:true})
  password: string;

  @Column({nullable:true})
  address: string;

  @Column({nullable:true})
  status: string;

  @Column({nullable:true})
  email: string;
}
