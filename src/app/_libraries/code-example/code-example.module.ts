import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from './code-example/code-example.component';
import { ExampleComponent } from './example/example.component';
import { SourceComponent } from './source/source.component';
import { UltTabsModule } from '@ultima-ui/components';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';

@NgModule({
  declarations: [
    CodeExampleComponent,
    ExampleComponent,
    SourceComponent
  ],
  imports: [
    CommonModule,
    UltTabsModule,
    HighlightModule,
    HighlightPlusModule
  ],
  exports: [
    CodeExampleComponent,
    ExampleComponent,
    SourceComponent
  ]
})
export class CodeExampleModule { }
