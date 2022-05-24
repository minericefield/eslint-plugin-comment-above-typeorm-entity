import { Entity, PrimaryGeneratedColumn } from "typeorm";

// comment
@Entity()
// comment
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
