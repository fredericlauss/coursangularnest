import { Component } from '@angular/core';
import { UrlShortenedService } from '../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-url-shortened',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UrlShortenedService],
  templateUrl: './url-shortened.component.html',
  styleUrl: './url-shortened.component.scss',
})
export class UrlShortenedComponent {
  allUrlsS = this.urlShortenerService.getAllUrls();

  constructor(private readonly urlShortenerService: UrlShortenedService) {}
}
