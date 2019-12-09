import { Arg, Resolver, Query, Mutation } from "type-graphql";
import { Comment, commentRepository, CommentInput } from "./comment.model";

@Resolver(Comment)
export default class CommentResolver {

    @Query(type => [Comment])
    comments() {
        return commentRepository.find().lean();
    }

    @Mutation(type => Comment)
    insertComment(@Arg("comment") comment: CommentInput) {
        return commentRepository.create(comment);
    }
}