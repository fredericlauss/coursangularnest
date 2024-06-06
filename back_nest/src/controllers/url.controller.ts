import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UrlService } from 'src/services/url.service';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Get()
  getAll() {
    return this.urlService.getAllUrls();
  }

  @Get(':shortUrl')
  async getRedirectUrl(@Param('shortUrl') shortUrl: string, @Res() res: Response) {
    const urlFound = await this.urlService.getUrl(shortUrl);
    if (urlFound) {
      res.redirect(urlFound.originalUrl);
    }
    res.status(404).json({
      message: 'Url courte introuvable !',
    });
  }

  @Post()
  create(@Body('originalUrl') originalUrl: string) {
    return this.urlService.createShortUrl(originalUrl);
  }
}
