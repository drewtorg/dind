import { Component } from '@angular/core';

@Component({
  selector: 'dnd-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  routes: any = [{
    title: 'Home',
    path: '/'
  },
  {
    title: 'Characters',
    path: '/characters'
  }];
}
