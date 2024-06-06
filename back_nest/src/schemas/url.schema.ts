import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Url {
  @Prop({ required: true })
  originalUrl: string;

  @Prop()
  shortUrl: string;
}

export const UrlShortener = SchemaFactory.createForClass(Url);
