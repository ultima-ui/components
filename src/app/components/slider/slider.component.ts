import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltFormsModule, UltSliderModule } from '@ultima-ui/components';
import { CodeBlockComponent } from "../../_libraries/code-block/code-block.component";
import { PlaygroundModule } from "../../_libraries/playground/playground.module";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltSliderModule,
    CodeBlockComponent,
    PlaygroundModule,
    UltFormsModule
  ],
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  importModule = `import { UltSliderModule } from '@ultima-ui/components';`;
  value = 22;
  stepsValue = 50;
  showStepPointsValue = 90;
  labelValue = 31;
}
