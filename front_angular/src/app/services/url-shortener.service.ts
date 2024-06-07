import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from '../environment/env';
import { Injectable } from '@angular/core';
import { UrlShortener } from '../interfaces/url-Shortener.interface';

@Injectable()
export class UrlShortenedService {
  constructor(private readonly httpclient: HttpClient) {}

  getAllUrls(): Observable<UrlShortener[]> {
    return this.httpclient.get<UrlShortener[]>(env.baseApiUrl);
  }

  createShortUrl(url: string): Observable<UrlShortener> {
    return this.httpclient.post<UrlShortener>(env.baseApiUrl, {
      originalUrl: url,
    });
  }
}
