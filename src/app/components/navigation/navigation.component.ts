import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
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
