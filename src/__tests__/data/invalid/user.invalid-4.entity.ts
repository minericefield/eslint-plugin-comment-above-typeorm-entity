import { Entity, PrimaryGeneratedColumn } from "typeorm";

const someFunc = () => {
  // someFunc
};
someFunc();

// comment

@Entity()
export class User {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}

// comment
@Entity()
export class Task {
  @PrimaryGeneratedColumn({ comment: "id" })
  id!: number;
}
