import {
  Resolver,
  Query,
  Arg,
  Mutation,
  InputType,
  Field,
  UseMiddleware,
} from "type-graphql";
import { Book } from "../entities/Book";
import { isAuth } from "../middleware/isAuth";

@InputType()
class Options {
  @Field()
  title!: string;
  @Field()
  googleId!: string;
  @Field()
  author!: string;
  @Field()
  thumbnail!: string;
}

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  books(): Promise<Book[]> {
    return Book.find();
  }

  @Query(() => Book, { nullable: true })
  @UseMiddleware(isAuth)
  book(@Arg("id") id: number): Promise<Book | undefined> {
    return Book.findOne(id);
  }

  @Mutation(() => Book)
  @UseMiddleware(isAuth)
  async createBook(
    @Arg("options", () => Options) options: Options
  ): Promise<Book> {
    const book = await Book.findOne({ where: { googleId: options.googleId } });
    if (book) return book;
    return Book.create(options).save();
  }

  @Mutation(() => Book, { nullable: true })
  @UseMiddleware(isAuth)
  async updateBook(
    @Arg("id") id: number,
    @Arg("options", () => Options) options: Options
  ): Promise<Book | null> {
    const book = await Book.findOne(id);
    if (!book) return null;
    if (typeof options.title !== "undefined") book.title = options.title;
    if (typeof options.author !== "undefined") book.author = options.author;
    if (typeof options.thumbnail !== "undefined")
      book.thumbnail = options.thumbnail;

    await Book.update(id, book);
    return book;
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteBook(@Arg("id") id: number): Promise<boolean> {
    await Book.delete(id);
    return true;
  }
}
