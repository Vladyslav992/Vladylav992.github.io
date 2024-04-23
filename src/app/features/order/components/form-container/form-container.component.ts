import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";

type Step = 'productNames' | 'location' | 'paymentMethod' | 'deliveryDate' | 'checkout';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class FormContainerComponent implements OnInit {
  currentStepBs: BehaviorSubject<any> = new BehaviorSubject<Step>('productNames');
  currentStep$ = this.currentStepBs.asObservable();
  orderForm: FormGroup;
  stepsOrder: any = {
    productNames: {next: 'location'},
    location: {next: 'paymentMethod', prev: 'productNames'},
    paymentMethod: {next: 'deliveryDate', prev: 'location'},
    deliveryDate: {next: 'checkout', prev: 'paymentMethod'},
    checkout: {prev: 'deliveryDate'}
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      productNames: null,
      location: null,
      paymentMethod: null,
      deliveryDate: null,
    });
  }

  subFormInitialized(name: string, form: FormGroup) {
    this.orderForm.patchValue(form)
  }

  stepChange(currentStep: Step, direction: 'next' | 'prev') {
    const stepOrder = this.stepsOrder[currentStep];
    const targetStep: Step = stepOrder[direction];

    this.currentStepBs.next(targetStep);
  }
}
