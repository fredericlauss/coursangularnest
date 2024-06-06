import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlShortenedComponent } from './url-shortened/url-shortened.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UrlShortenedComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
