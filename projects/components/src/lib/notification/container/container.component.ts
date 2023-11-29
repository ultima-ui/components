import {
  Component,
  inject,
  Injector,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { NOTIFICATION_REF, NotificationContentRef, NotificationPosition } from '../types';
import { NotificationRef } from '../notification-ref';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

let nextId = 0;

interface NotificationDef {
  id: number,
  content: TemplatePortal | ComponentPortal<any>,
  notificationRef: NotificationRef
}

@Component({
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  host: {
    'class': 'ult-notification-container'
  }
})
export class ContainerComponent {
  private _viewContainerRef = inject(ViewContainerRef);
  private _injector = inject(Injector);
  readonly notifications: NotificationDef[] = [];

  add(contentRef: NotificationContentRef, position: NotificationPosition, duration: number | null): NotificationRef {
    const notificationRef = new NotificationRef(nextId, position, duration);
    const injector = Injector.create({
      providers: [
        {
          provide: NOTIFICATION_REF,
          useValue: notificationRef
        }
      ],
      parent: this._injector
    });
    const portal = contentRef instanceof TemplateRef ?
      new TemplatePortal(
        contentRef, this._viewContainerRef,
        { $implicit: notificationRef },
        injector
      ) : new ComponentPortal(contentRef, null, injector)
    ;

    const notifyRef = {
      id: nextId,
      content: portal,
      notificationRef
    };

    if (['top-start', 'top-center', 'top-end'].includes(position)) {
      this.notifications.push(notifyRef);
    } else if (['bottom-start', 'bottom-center', 'bottom-end'].includes(position)) {
      this.notifications.unshift(notifyRef);
    }

    const subscription = notificationRef
      .closed
      .subscribe(() => {
        const index = this.notifications.findIndex(
          notification => notification.notificationRef.id === notificationRef.id
        );
        this.notifications.splice(index, 1);
        subscription.unsubscribe();
      })
    ;
    nextId++;

    return notificationRef;
  }

  closeAll() {
    this.notifications.forEach(notification => {
      notification.notificationRef.close();
    });
  }

  trackBy(index: number, item: any): number {
    return item.id;
  }
}
