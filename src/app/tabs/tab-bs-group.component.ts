import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'app-bs-tab-group',
  template: `<ul class="nav nav-tabs" role="tablist">
      <li
        class="nav-item"
        role="presentation"
        *ngFor="let tab of tabPanelList; index as idx"
        (click)="selectItem(idx)"
      >
        <a
          class="nav-link"
          [class.active]="idx === tabActiveIndex"
          role="tab"
          aria-selected="true"
          >{{ tab.title }}</a
        >
      </li>
    </ul>

    <div class="tab-content">
      <ng-container *ngFor="let tab of tabPanelList; index as idx">
        <div
          class="tab-pane active"
          role="tabpanel"
          *ngIf="idx === tabActiveIndex"
        >
          <!-- <ng-container *ngTemplateOutlet="tab.panelBody"></ng-container> -->
        </div>
      </ng-container>
    </div>`,
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: BsTabGroupComponent,
    },
  ],
})
export class BsTabGroupComponent extends TabGroupComponent {}
