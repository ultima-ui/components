import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  inject,
  Input,
  Output,
  QueryList, ViewContainerRef
} from '@angular/core';
import { TabsApiService } from '../tabs-api.service';
import { TemplatePortal } from '@angular/cdk/portal';
import { TabComponent } from '../tab/tab.component';
import { TABS_CONTAINER } from '../types';

@Component({
  selector: 'ult-tabs',
  exportAs: 'ultTabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [
    {
      provide: TABS_CONTAINER,
      useExisting: TabsComponent
    },
    TabsApiService
  ],
  host: {
    'class': 'ult-tabs',
    '[class.is-bordered]': 'bordered',
    '[class.is-align-start]': 'align == "start"',
    '[class.is-align-center]': 'align == "center"',
    '[class.is-align-end]': 'align == "end"',
    '[class.is-stretch]': 'stretch'
  }
})
export class TabsComponent implements AfterContentInit {
  readonly api = inject(TabsApiService);
  private _vcr = inject(ViewContainerRef);

  @Input() bordered = true;
  @Input() stretch = false;
  @Input() align: 'start' | 'center' | 'end' | string = 'start';

  nextId = 0;
  portal: TemplatePortal;

  @ContentChildren(TabComponent) private _tabs: QueryList<TabComponent>;

  @Input()
  set activeTabId(id: any) {
    this.api.activate(id, false);
  }

  @Output()
  get tabIdChange(): EventEmitter<any> {
    return this.api.tabIdChange;
  }

  ngAfterContentInit() {
    const activeTab = this._tabs.find(tab => this.api.isActive(tab.id));

    if (activeTab) {
      this.portal = new TemplatePortal<any>(activeTab.contentRef, this._vcr);
    }

    this.api.tabIdChange.subscribe(tabId => {
      const activeTab = this._tabs.find(tab => tab.id === tabId) as TabComponent;
      this.portal = new TemplatePortal<any>(activeTab.contentRef, this._vcr);
    });
  }
}
