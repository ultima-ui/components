import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule,
    PortalModule
  ],
  exports: [
    TooltipDirective
  ]
})
export class UltTooltipModule { }
