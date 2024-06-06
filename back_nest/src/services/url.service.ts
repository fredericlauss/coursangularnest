import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url } from 'src/schemas/url.schema';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  async createShortUrl(originalUrl: string) {
    const shortenUrl = nanoid(6);
    return await this.urlModel.create({ originalUrl, shortUrl: shortenUrl });
  }

  async getUrl(shortUrl: string) {
    return await this.urlModel.findOne({ shortUrl }).exec();
  }

  async getAllUrls() {
    return await this.urlModel.find().exec();
  }
}
