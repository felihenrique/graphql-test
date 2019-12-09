import { ObjectType, Field, InputType } from "type-graphql";
import { prop, getModelForClass, Ref, arrayProp } from "@typegoose/typegoose";
import { Post } from "./post.model";

@ObjectType()
export class User {
  @Field()
  _id: string;

  @prop()
  @Field()
  name: string;

  @Field(type => [Post])
  @arrayProp({ itemsRef: Post })
  posts: Ref<Post>[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  name: string;
}

export const userRepository = getModelForClass(User, {
  schemaOptions: { timestamps: true }
});
