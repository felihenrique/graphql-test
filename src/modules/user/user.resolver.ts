import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  Args,
  ArgsType,
  Root,
  FieldResolver
} from "type-graphql";
import { User, UserInput, userRepository } from "./user.model";
import { postRepository } from "./post.model";

@ArgsType()
class FindArgs {
  @Field({ nullable: true })
  id: string;
}

@Resolver(User)
export default class UserResolver {
  @Query(type => [User])
  users(@Args() findArgs: FindArgs) {
    return userRepository
      .find(findArgs)
      .lean();
  }

  @Query(type => User)
  user(@Args() findArgs: FindArgs) {
    return userRepository
      .findOne(findArgs)
      .lean();
  }

  @FieldResolver()
  posts(@Root() user: User, @Arg("limit", { nullable: true }) limit?: number) {
    return postRepository
      .find({ userId: user._id })
      .limit(limit)
      .lean();
  }

  @Mutation(type => User)
  insertUser(@Arg("user") user: UserInput) {
    return userRepository.create(user);
  }
}
