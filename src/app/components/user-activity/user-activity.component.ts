import { Component } from '@angular/core';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent {
  showModal = false;
  weight = 70;
  age = 25;
  gender = 'male';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateWeight(weight: number) {
    this.weight = weight;
  }
}
