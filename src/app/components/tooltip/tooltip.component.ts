import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltButtonModule, UltFormsModule, UltRadioModule, UltTooltipModule } from '@ultima-ui/components';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltTooltipModule,
    PlaygroundModule,
    UltButtonModule,
    UltFormsModule,
    UltRadioModule
  ],
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
  basicTooltip = {
    position: 'above-center'
  };
}
