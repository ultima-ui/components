import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'code-block',
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule,
    HighlightPlusModule
  ],
  templateUrl: './code-block.component.html',
  host: {
    class: 'block'
  }
})
export class CodeBlockComponent implements OnInit {
  @Input() code = '';
  @Input() lang = 'typescript';

  @Input()
  set codeUrl(codeUrl: string) {
    this._codeUrl = location.protocol + '//' + location.host + codeUrl;
  }
  get codeUrl(): string {
    return this._codeUrl;
  }
  private _codeUrl = '';

  ngOnInit() {
  }
}
