import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 256 })
    title!: string;

    @Column("text")
    content!: string;
}