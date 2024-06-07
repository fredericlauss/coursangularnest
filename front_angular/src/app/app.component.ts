import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlShortenedComponent } from './url-shortened/url-shortened.component';
import { FormComponent } from './form/form.component';
import { UrlShortener } from './interfaces/url-Shortener.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UrlShortenedComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  urls: UrlShortener[] = [];
  urlfunction(event: UrlShortener) {
    console.log(event);
    this.urls.push(event);
  }
}
