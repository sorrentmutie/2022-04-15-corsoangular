import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTesting';
  items : string[] = [];
  constructor(service: AppService) {
    service.getList().subscribe(
      data => this.items = data
    );
  }
}
