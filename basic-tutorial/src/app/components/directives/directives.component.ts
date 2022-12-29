import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  isVisible = true;
  textColor = 'green';
  cssClasses = ['red-title', 'big-title'];

  togleTextVisibility() {
    this.isVisible = !this.isVisible;
  }
}