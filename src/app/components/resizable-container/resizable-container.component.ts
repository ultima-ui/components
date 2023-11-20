import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltResizableContainerModule } from '@ultima-ui/components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UltResizableContainerModule
  ],
  templateUrl: './resizable-container.component.html'
})
export class ResizableContainerComponent {

}
