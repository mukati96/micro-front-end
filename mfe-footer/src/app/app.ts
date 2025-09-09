import { Component } from '@angular/core';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { ngSkipHydration: '' }
})
export class App {
  protected title = 'mfe-footer';
}
