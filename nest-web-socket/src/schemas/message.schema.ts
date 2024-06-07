import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Message {
  @Prop({ required: true })
  content: string;

  @Prop()
  date: string;
}

export const UrlShortener = SchemaFactory.createForClass(Message);
