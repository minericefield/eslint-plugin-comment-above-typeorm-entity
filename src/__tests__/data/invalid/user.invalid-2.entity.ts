import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

// comment

export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
