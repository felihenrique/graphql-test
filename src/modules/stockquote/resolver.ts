import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Field,
  Args,
  ArgsType,
  Ctx
} from "type-graphql";
import { StockQuote, StockQuoteInput, StockQuoteRepository } from "./model";

@ArgsType()
class FindArgs {
  @Field({ nullable: true })
  date?: Date;

  @Field({ nullable: true })
  code?: string;
}

@Resolver(StockQuote)
export default class StockQuoteResolver {
  @Query(type => [StockQuote])
  stockquoties(@Args() findArgs: FindArgs) {
    return StockQuoteRepository.find(findArgs);
  }

  @Query(type => StockQuote)
  stockquote(@Args() companiesArgs: FindArgs) {
    return StockQuoteRepository.findOne(companiesArgs);
  }

  @Mutation(type => StockQuote)
  async insertOrUpdateStockQuote(@Arg("stockquote") quote: StockQuoteInput) {
    const stock = await StockQuoteRepository.findOne({
      code: quote.code,
      date: quote.date
    });
    if (stock) {
      return StockQuoteRepository.updateOne({ _id: stock.id }, quote);
    }
    return StockQuoteRepository.create(quote);
  }
}
