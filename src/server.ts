import { GraphQLServer } from "graphql-yoga";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { mongoose } from "@typegoose/typegoose";
import UserResolver from "./modules/user/user.resolver";
import PostResolver from "./modules/user/post.resolver";
import CommentResolver from "./modules/user/comment.resolver";

(async () => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [UserResolver, PostResolver, CommentResolver]
  });

  await mongoose.connect("mongodb://root:root@localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.set('debug', true);

  const server = new GraphQLServer({ typeDefs, resolvers });

  server.start(() => console.log("Server is running on port 4000"));
})();
