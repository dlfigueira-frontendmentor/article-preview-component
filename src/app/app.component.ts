import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isShareVisible = false;

  toggleShare(): void {
    this.isShareVisible = !this.isShareVisible;
  }
}
