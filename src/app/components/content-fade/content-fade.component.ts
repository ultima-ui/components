import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltContentFadeModule } from '@ultima-ui/components';
import { PlaygroundModule } from "../../_libraries/playground/playground.module";
import { CodeBlockComponent } from "../../_libraries/code-block/code-block.component";

@Component({
  standalone: true,
  templateUrl: './content-fade.component.html',
  styleUrl: './content-fade.component.css',
  imports: [
    CommonModule,
    UltContentFadeModule,
    PlaygroundModule,
    CodeBlockComponent
  ]
})
export class ContentFadeComponent {
  importModule = 'import { UltContentFadeModule } from \'@ultima-ui/components\';';
}
