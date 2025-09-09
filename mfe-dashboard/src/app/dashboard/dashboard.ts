import { Component } from '@angular/core';
import { Cards } from "./cards/cards";

@Component({
  selector: 'app-dashboard',
  imports: [Cards],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
