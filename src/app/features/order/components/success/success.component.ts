import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
  @Output() changeStep = new EventEmitter<any>();
  @Output() orderReset = new EventEmitter<any>();

  doStepChange(direction: 'next' | 'prev') {
    this.changeStep.emit(direction);
  }

  resetOrder() {
    this.orderReset.emit();
  }
}
