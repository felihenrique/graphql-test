import { ObjectType, Field, InputType } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Comment {
  @Field()
  _id: string;

  @prop()
  @Field()
  content: string;

  @prop()
  @Field()
  userId: string;

  @prop()
  @Field()
  postId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CommentInput implements Partial<Comment> {
  @Field()
  content: string;

  @Field()
  userId: string;

  @Field()
  postId: string;
}

export const commentRepository = getModelForClass(Comment, {
  schemaOptions: { timestamps: true }
});
