
import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-weight-modal',
  templateUrl: './weight-modal.component.html',
  styleUrls: ['./weight-modal.component.scss'],
  animations: [
    trigger('modalState', [
      state('void', style({ transform: 'scale(0.5)', opacity: 0 })),
      state('open', style({ transform: 'scale(1)', opacity: 1})),
      transition('void => open', animate('500ms ease-in')),
      transition('open => void', animate('500ms ease-out'))
    ])
  ]
})
export class WeightModalComponent implements OnInit {

  @HostBinding('@modalState') modalState = 'open';
  @Input() weight = 70;
  @Input() age = 25;
  @Input() gender = 'male';
  @Output() close = new EventEmitter<void>();
  @Output() weightChange = new EventEmitter<number>();

  dialControl = new FormControl(0);
  dialValue = 0;
  
  closeModal() {
    this.close.emit();
  }
  ngOnInit() {

    this.dialControl.valueChanges.subscribe(value => {
      if (value !== null) {
        this.dialValue = value;
      } else {
        this.dialValue = 0;
      }
    });
  }
  updateValue(value: number) {
    this.dialControl.setValue(value);
  }
  updateWeight(event: Event) {
    const input = event.target as HTMLInputElement;
    const weight = parseInt(input.value, 10);
    
    this.weightChange.emit(weight);
  }
}