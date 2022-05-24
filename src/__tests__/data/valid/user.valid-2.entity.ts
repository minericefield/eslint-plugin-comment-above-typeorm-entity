import { Entity, PrimaryGeneratedColumn } from "typeorm";

// comment
@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
