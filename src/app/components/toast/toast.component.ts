import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltButtonModule,
  UltToastModule,
  UltFormsModule,
  UltRadioModule,
  UltIconModule,
  UltAvatarModule,
  ToastService
} from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltToastModule,
    UltButtonModule,
    UltFormsModule,
    UltRadioModule,
    UltIconModule,
    InlineCodeDirective,
    CodeBlockComponent,
    CodeExampleModule,
    PlaygroundModule,
    UltAvatarModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  private _toastService = inject(ToastService);
  importModule = `import { UltToastModule } from '@ultima-ui/components';`;
  position = 'top-center';

  show(contentRef: TemplateRef<any>) {
    const toastRef = this._toastService.open(contentRef, {
      // duration: 200000
    });
  }

  showStack(contentRef: TemplateRef<any>) {
    const toastRef = this._toastService.open(contentRef, {
      stack: true
    });
  }

  noDuration(contentRef: TemplateRef<any>) {
    const toastRef = this._toastService.open(contentRef, {
      // duration: null
    });
  }

  closeAll() {
    // this._toastService.closeAll();
  }

  showByPosition(contentRef: TemplateRef<any>) {
    const toastRef = this._toastService.open(contentRef, {
      position: this.position
    });
  }
}
