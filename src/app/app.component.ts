import { Component } from '@angular/core';
import { TOPICS } from './topic-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = TOPICS;
}
