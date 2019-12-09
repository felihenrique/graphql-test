import { ObjectType, Field, InputType } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Post {
  @Field()
  _id: string;

  @prop()
  @Field()
  content: string;

  @prop()
  @Field()
  userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class PostInput implements Partial<Post> {
  @Field()
  content: string;

  @Field()
  userId: string;
}

export const postRepository = getModelForClass(Post, {
  schemaOptions: { timestamps: true }
});
