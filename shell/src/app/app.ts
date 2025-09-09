import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Header } from "../../../mfe-header/src/app/header/header";
import { Footer } from "../../../mfe-footer/src/app/footer/footer";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { ngSkipHydration: '' }
})
export class App {
}
