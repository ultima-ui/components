import { Component, inject, Input, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  host: {
    class: 'block bg-primary-50/25 p-6 rounded-b-lg relative h-full'
  }
})
export class SourceComponent implements OnInit {
  @Input()
  set htmlCodeUrl(codeUrl: string) {
    this._htmlCodeUrl = location.protocol + '//' + location.host + codeUrl;
  }
  get htmlCodeUrl(): string {
    return this._htmlCodeUrl;
  }
  private _htmlCodeUrl = '';

  @Input()
  set tsCodeUrl(codeUrl: string) {
    this._tsCodeUrl = location.protocol + '//' + location.host + codeUrl;
  }
  get tsCodeUrl(): string {
    return this._tsCodeUrl;
  }
  private _tsCodeUrl = '';

  @Input()
  set cssCodeUrl(codeUrl: string) {
    this._cssCodeUrl = location.protocol + '//' + location.host + codeUrl;
  }
  get cssCodeUrl(): string {
    return this._cssCodeUrl;
  }
  private _cssCodeUrl = '';

  currentView = 'html';

  private _state = inject(StateService);

  ngOnInit() {
    const codeExamples = [];

    if (this._htmlCodeUrl) {
      codeExamples.push({
        id: 'html',
        name: 'Html'
      });
    }

    if (this._tsCodeUrl) {
      codeExamples.push({
        id: 'ts',
        name: 'TypeScript'
      });
    }

    if (this._cssCodeUrl) {
      codeExamples.push({
        id: 'css',
        name: 'CSS'
      });
    }

    this._state.setInitializedCodeExamples(codeExamples);
    this._state.codeViewChanged().subscribe(codeView => {
      this.currentView = codeView;
    });
  }
}
