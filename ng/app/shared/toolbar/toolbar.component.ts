import { Component, Input } from '@angular/core';

@Component({
  selector: 'dnd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() routes: any;
}
