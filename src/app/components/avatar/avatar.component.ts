import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltAvatarModule, UltButtonModule } from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltButtonModule,
    UltAvatarModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule
  ],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  importModule = `import { UltAvatarModule } from '@ultima-ui/components';`;
  max = 3;
}
