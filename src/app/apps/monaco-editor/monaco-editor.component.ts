import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { UltMonacoEditorModule } from "../../../../projects/components";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltMonacoEditorModule,
    PlaygroundModule,
    CodeBlockComponent,
    InlineCodeDirective
  ],
  templateUrl: './monaco-editor.component.html'
})
export class MonacoEditorComponent implements OnInit {
  importExample = `import { UltMonacoEditorModule } from '@ultima-ui/monaco-editor';`;
  copyLibraries = `{
  "glob": "**/*",
  "input": "node_modules/monaco-editor",
  "output": "/assets/monaco-editor/"
}`;
  value = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="w-6 h-6 text-gray-600 bg-[#ff8888] hover:text-sky-600 ring-gray-900/5"></div>
  </body>
</html>`;

  show = false;

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 5000);
  }
}
