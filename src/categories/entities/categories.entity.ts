import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class Categories {
    @PrimaryGeneratedColumn() 
    Cat_ID:         number;

    @Column()
    titel :         string;
}
