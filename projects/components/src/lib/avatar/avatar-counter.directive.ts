import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultAvatarCounter]'
})
export class AvatarCounterDirective {
  readonly templateRef = inject(TemplateRef);
}
