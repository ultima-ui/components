import {
  booleanAttribute,
  Component,
  ContentChild,
  HostListener,
  inject,
  Input, OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { TabsApiService } from '../tabs-api.service';
import { TABS_CONTAINER } from '../types';
import { TabsComponent } from '../tabs/tabs.component';
import { TabLabelDirective } from '../tab-label.directive';

@Component({
  selector: 'ult-tab,[ultTab]',
  exportAs: 'ultTab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  host: {
    class: 'ult-tab',
    '[class.is-active]': 'active',
    '[class.is-disabled]': 'disabled',
  }
})
export class TabComponent {
  readonly api = inject(TabsApiService);
  private _container = inject<TabsComponent>(TABS_CONTAINER, { optional: true });

  @Input('tabId')
  id: any = this._container ? this._container.nextId++ : null;

  @Input({ transform: booleanAttribute })
  disabled = false;

  @Input()
  label: string;

  @ViewChild('content', { static: true })
  readonly contentRef: TemplateRef<any>;

  @ContentChild(TabLabelDirective, { read: TemplateRef })
  readonly labelRef: TemplateRef<any>;

  get active(): boolean {
    return this.api.isActive(this.id);
  }

  @HostListener('click')
  activate() {
    if (this.disabled) {
      return;
    }

    this.api.activate(this.id);
  }
}
