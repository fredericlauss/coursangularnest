import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Url, UrlShortener } from './schemas/url.schema';
import { UrlService } from './services/url.service';
import { UrlController } from './controllers/url.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    MongooseModule.forFeature([{ name: Url.name, schema: UrlShortener }]),
  ],
  controllers: [UrlController],
  providers: [AppService, UrlService],
})
export class AppModule {}
