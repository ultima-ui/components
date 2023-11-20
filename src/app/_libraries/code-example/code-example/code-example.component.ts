import { Component, inject } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.css'],
  providers: [
    StateService
  ],
  host: {
    class: 'flex flex-col border rounded-lg'
  }
})
export class CodeExampleComponent {
  readonly state = inject(StateService);
}
