import { Arg, Resolver, Query, Mutation, FieldResolver, Root } from "type-graphql";
import { Post, postRepository, PostInput } from "./post.model";
import { commentRepository, Comment } from "./comment.model";


@Resolver(Post)
export default class PostResolver {

    @Query(type => [Post])
    posts() {
        return postRepository.find().lean();
    }

    @Mutation(type => Post)
    insertPost(@Arg("post") post: PostInput) {
        return postRepository.create(post);
    }

    @FieldResolver(type => [Comment])
    comments(@Root() post: Post) {
        return commentRepository.find({ postId: post._id });
    }
}