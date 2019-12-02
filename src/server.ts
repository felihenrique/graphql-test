import { GraphQLServer } from "graphql-yoga";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { mongoose } from "@typegoose/typegoose";
import StockQuoteResolver from "./modules/stockquote/resolver";
import { Teste } from "./middlewares/Teste";

(async () => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [StockQuoteResolver],
    globalMiddlewares: [Teste]
  });

  await mongoose.connect("mongodb://root:root@localhost:27017/admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const server = new GraphQLServer({ typeDefs, resolvers });

  server.start(() => console.log("Server is running on port 4000"));
})();
