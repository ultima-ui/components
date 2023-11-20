import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CodeExampleEvent {
  id: string;
  name: string;
}

@Injectable()
export class StateService {
  private _codeView$ = new BehaviorSubject<string>('html');
  private _codeExamples$ = new BehaviorSubject<CodeExampleEvent[]>([]);

  codeViewChanged(): BehaviorSubject<string> {
    return this._codeView$;
  }

  codeExamples(): BehaviorSubject<CodeExampleEvent[]> {
    return this._codeExamples$;
  }

  setCodeView(codeView: string) {
    this._codeView$.next(codeView);
  }

  setInitializedCodeExamples(codeExamples: CodeExampleEvent[]) {
    this._codeExamples$.next(codeExamples);
  }

  getCurrentView(): string {
    return this._codeView$.value;
  }

}
