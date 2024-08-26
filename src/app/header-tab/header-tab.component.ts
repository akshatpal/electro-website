import { Component } from '@angular/core';

@Component({
  selector: 'app-header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent {
  productList = ["Home","Hot Deals","Categories","Laptops","Smart Phones","Cameras","Accesories"];
  selectedTabIndex: number = 0; // Default to the first tab

  setSelectedTab(index: number): void {
    this.selectedTabIndex = index;
  }
}
