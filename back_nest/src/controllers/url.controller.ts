import { Body, Controller, Get, Post } from '@nestjs/common';
import { UrlService } from 'src/services/url.service';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  getAll() {
    return this.urlService.getAllUrls();
  }

  @Post()
  create(@Body('originalUrl') originalUrl: string) {
    return this.urlService.createShortUrl(originalUrl);
  }
}
