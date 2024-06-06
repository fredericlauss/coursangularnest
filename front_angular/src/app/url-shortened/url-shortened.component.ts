import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UrlShortenedService } from '../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { env } from '../environment/env';

@Component({
  selector: 'app-url-shortened',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UrlShortenedService],
  templateUrl: './url-shortened.component.html',
  styleUrl: './url-shortened.component.scss',
})
export class UrlShortenedComponent {
  env = env;

  @Input() name: string = '';
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  allUrls$ = this.urlShortenerService.getAllUrls();

  constructor(private readonly urlShortenerService: UrlShortenedService) {}

  sendMessage() {
    this.nameChange.emit('Bien reçu !');
  }
}
