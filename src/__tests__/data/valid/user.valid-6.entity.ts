import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
/**
 * comment
 */
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}

@Entity()
// comment
export class Task {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
