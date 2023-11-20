import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { PortalModule } from '@angular/cdk/portal';
import { TabLabelDirective } from './tab-label.directive';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabLabelDirective
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabLabelDirective
  ]
})
export class UltTabsModule { }
