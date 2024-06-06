import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlShortenedComponent } from './url-shortened/url-shortened.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UrlShortenedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
