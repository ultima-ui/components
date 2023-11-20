import { booleanAttribute, Component, inject, Input, OnInit } from '@angular/core';
import { FORM_FIELD, FormField } from '../properties';

@Component({
  selector: 'ult-label',
  exportAs: 'ultLabel',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  host: {
    'class': 'inline-block'
  }
})
export class LabelComponent implements OnInit {
  private _formField = inject<FormField>(FORM_FIELD, { optional: true });

  @Input({ transform: booleanAttribute }) required = false;
  @Input() for: string;

  ngOnInit() {
    if (!this.for && this._formField) {
      this.for = this._formField.id;
    }
  }
}
