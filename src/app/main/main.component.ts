import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  productList = ["Laptops","Smart Phones","Cameras","Accesories"];
  selectedTabIndex: number = 0; // Default to the first tab

  setSelectedTab(index: number): void {
    this.selectedTabIndex = index;
  }
}
