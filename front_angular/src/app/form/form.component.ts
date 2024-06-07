import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UrlShortenedService } from '../services/url-shortener.service';
import { UrlShortener } from '../interfaces/url-Shortener.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [UrlShortenedService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() urls: UrlShortener[] = [];
  @Output() url: EventEmitter<UrlShortener> = new EventEmitter();

  constructor(private readonly urlShortenerService: UrlShortenedService) {}

  form: FormGroup = new FormGroup({
    originalUrl: new FormControl(''),
  });

  onSubmit() {
    this.urlShortenerService
      .createShortUrl(this.form.controls['originalUrl'].value)
      .subscribe((res) => {
        this.url.emit(res);
      });
  }
}
