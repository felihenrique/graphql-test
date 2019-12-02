import { ObjectType, Field, Int, InputType } from "type-graphql";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class StockQuote {
  @Field()
  @prop(type => Int)
  open: number;

  @Field()
  @prop(type => Int)
  max: number;

  @Field()
  @prop(type => Int)
  min: number;

  @Field()
  @prop(type => Int)
  close: number;

  @Field()
  @prop(type => Int)
  volume: number;

  @Field()
  @prop()
  code: string;

  @Field()
  @prop(type => Date)
  date: Date;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class StockQuoteInput implements Partial<StockQuote> {
  @Field()
  open: number;

  @Field()
  max: number;

  @Field()
  min: number;

  @Field()
  close: number;

  @Field()
  volume: number;

  @Field()
  code: string;

  @Field()
  date: Date;
}

export const StockQuoteRepository = getModelForClass(StockQuote, {
  schemaOptions: { timestamps: true }
});
