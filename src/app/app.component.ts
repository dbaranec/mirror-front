import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    setInterval(() => this.reloadPage(), 600000);

  }

  private reloadPage() {
    window.location.reload(true);
  }
}
