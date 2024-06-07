import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UrlShortenedService } from '../services/url-shortener.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { env } from '../environment/env';
import { UrlShortener } from '../interfaces/url-Shortener.interface';

@Component({
  selector: 'app-url-shortened',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UrlShortenedService],
  templateUrl: './url-shortened.component.html',
  styleUrl: './url-shortened.component.scss',
})
export class UrlShortenedComponent implements OnChanges {
  env = env;

  @Input() urls: UrlShortener[] = [];
  @Input() name: string = '';
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  allUrls$ = this.urlShortenerService.getAllUrls();

  constructor(
    private readonly urlShortenerService: UrlShortenedService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.allUrls$.subscribe((res) => {
      this.urls = res;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.changeDetectorRef.detectChanges();
  }

  sendMessage() {
    this.nameChange.emit('Bien reçu !');
  }
}
