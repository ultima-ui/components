import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltUploadModule, UltButtonModule, UploadSelectedEvent, UltIconModule } from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltUploadModule,
    UltButtonModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule,
    UltIconModule
  ],
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  importModule = `import { UltUploadModule } from '@ultima-ui/components';`;
  selectedFiles: any = [];
  selectedAreaFiles: any = [];
  fileList = [
    {
      name: 'Annual Report.docx',
      state: 'uploaded',
      processing: false,
      errorMessage: false
    },
    {
      name: 'Workflow.pdf',
      state: 'uploading',
      processing: false,
      errorMessage: false,
      remainingTime: '(remaining time: 00:2:01)',
      size: '11MB',
      progress: 60
    },
    {
      name: 'Financials.xlsx',
      state: 'error',
      errorMessage: 'An error occurred'
    }
  ];

  upload(event: UploadSelectedEvent) {
    this.selectedFiles = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }

  uploadArea(event: UploadSelectedEvent) {
    this.selectedAreaFiles = event.files.map(rawFile => {
      return {
        name: rawFile.name,
        size: rawFile.size
      }
    });
  }
}
