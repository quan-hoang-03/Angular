import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [''],
})
export class TabPanelComponent implements OnInit, OnDestroy {
  @Input() title = '';
  // @ViewChild(TemplateRef, { static: true }) panelBody: TemplateRef<unknown>;
  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit() {
    this.tabGroup.addTabPanel(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
}
