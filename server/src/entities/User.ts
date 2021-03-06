import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Bookshelf } from "./Bookshelf";
import { UserBook } from "./UserBook";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Field()
  @Column()
  name!: string;

  @OneToMany(() => Bookshelf, (bookshelf) => bookshelf.user)
  bookshelves: Bookshelf[];

  @OneToMany(() => UserBook, (userBook) => userBook.user)
  books: UserBook[];
}
