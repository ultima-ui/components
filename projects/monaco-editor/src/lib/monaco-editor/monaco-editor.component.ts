import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { editor } from 'monaco-editor';
import IModelContentChangedEvent = editor.IModelContentChangedEvent;
import IEditorPaddingOptions = editor.IEditorPaddingOptions;

let scriptLoaded = false;

@Component({
  selector: 'ult-monaco-editor',
  exportAs: 'ultMonacoEditor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'ult-monaco-editor'
  }
})
export class MonacoEditorComponent implements OnChanges {
  private _doc = inject(DOCUMENT);
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @ViewChild('contentRef', { static: true })
  private _contentRef: ElementRef;

  @Input()
  value = '';

  @Input()
  language = 'typescript';

  @Input()
  fontSize = 13;

  @Input()
  tabSize = 2;

  @Input()
  theme = '';

  @Input()
  version = '0.44.0';

  @Input({ transform: booleanAttribute })
  readOnly = false;

  @Input({ transform: booleanAttribute })
  minimap = false;

  @Input()
  padding: IEditorPaddingOptions = {
    top: 10,
    bottom: 10
  };

  @Output()
  readonly editorLoaded = new EventEmitter();

  @Output()
  readonly valueChange = new EventEmitter<string>();

  private _editor: any;

  get api() {
    return {
      refreshLayout: () => this._refreshLayout()
    };
  }

  ngOnInit() {
    if (!scriptLoaded) {
      const monacoEditorUrl = 'https://unpkg.com/monaco-editor@' + this.version;
      const loaderScript: HTMLScriptElement = document.createElement('script');
      loaderScript.type = 'text/javascript';
      loaderScript.src = `${monacoEditorUrl}/min/vs/loader.js`;
      loaderScript.addEventListener('load', () => {
        (<any>window).require.config({
          paths: {
            vs: `${monacoEditorUrl}/min/vs`
          }
        });
        (<any>window).require(['vs/editor/editor.main'], () => {
          scriptLoaded = true;
          this._setupEditor();
        });
      });
      this._renderer.appendChild(this._doc.body, loaderScript);
    } else {
      this._setupEditor();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['language'] && !changes['language'].firstChange &&
        changes['language'].previousValue !== changes['language'].currentValue) {

    }

    if (changes['value'] && !changes['value'].firstChange &&
        changes['value'].previousValue !== changes['value'].currentValue) {

    }
  }

  private _refreshLayout() {
    const nativeElement: HTMLElement = this._elementRef.nativeElement;

    if (nativeElement.parentElement) {
      const { width, height } = nativeElement.parentElement.getBoundingClientRect();
      this._editor.layout({ width, height });
      this._editor.getModel().setValue(this._editor.getModel().getValue());
    }
  }

  private _setupEditor() {
    const monaco = (<any>window).monaco;
    const options: editor.IStandaloneEditorConstructionOptions = {
      readOnly: this.readOnly,
      theme: this.theme,
      tabSize: this.tabSize,
      padding: this.padding,
      fontSize: this.fontSize,
      minimap: {
        enabled: this.minimap
      },
      language: this.language,
      value: this.value
    };
    this._editor = monaco.editor.create(this._contentRef.nativeElement, options);
    this._editor.getModel().onDidChangeContent((event: IModelContentChangedEvent) => {
      this.valueChange.emit(this._editor.getModel().getValue());
    });
    this._refreshLayout();
  }
}
