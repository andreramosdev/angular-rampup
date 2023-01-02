import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {

  myNumber: number = 0;

  updateNumber(event: any): void {
    console.log('updating the number: ', event);
    this.myNumber = event;
  }

}
