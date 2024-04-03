import { Component, Input, OnInit, Output } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-tab-group',
  template: `<div class="tab-header">
      <div
        class="tab-item-header"
        role="presentation"
        *ngFor="let tab of tabPanelList; index as idx"
        (click)="selectItem(idx)"
      >
        {{ tab.title }}
      </div>
    </div>

    <div class="tab-body">
      <ng-container *ngFor="let tab of tabPanelList; index as idx">
        <div *ngIf="idx === tabActiveIndex">
          <!-- <ng-container *ngTemplateOutlet="tab.panelBody"></ng-container> -->
        </div>
      </ng-container>
    </div>`,
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];

  @Input() tabActiveIndex = 0;
  // @Output() tabActiveChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    // this.tabActiveChange.emit(idx);
  }

  addTabPanel(tab: TabPanelComponent) {
    this.tabPanelList.push(tab);
  }
  removeTabPanel(tab: TabPanelComponent) {
    let index = -1;
    const tabPanelList: TabPanelComponent[] = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }
}
