import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UltButtonModule,
  UltNotificationModule,
  NotificationService,
  UltFormsModule,
  UltRadioModule,
  UltIconModule, UltAvatarModule
} from '@ultima-ui/components';
import { InlineCodeDirective } from '../../_libraries/inline-code.directive';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { CodeExampleModule } from '../../_libraries/code-example/code-example.module';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltNotificationModule,
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
  templateUrl: './notification.component.html'
})
export class NotificationComponent {
  private _notificationService = inject(NotificationService);
  importModule = `import { UltNotificationModule } from '@ultima-ui/components';`;
  position = 'top-center';

  show(contentRef: TemplateRef<any>) {
    const notificationRef = this._notificationService.open(contentRef, {
      duration: 200000
    });
  }

  showStack(contentRef: TemplateRef<any>) {
    const notificationRef = this._notificationService.open(contentRef, {
      stack: true
    });
  }

  noDuration(contentRef: TemplateRef<any>) {
    const notificationRef = this._notificationService.open(contentRef, {
      // duration: null
    });
  }

  closeAll() {
    this._notificationService.closeAll();
  }

  showByPosition(contentRef: TemplateRef<any>) {
    const notificationRef = this._notificationService.open(contentRef, {
      position: this.position
    });
  }
}
