import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LayoutApi {
  readonly layoutEnabled = new EventEmitter<string>();
  readonly layoutDisabled = new EventEmitter<string>();
  readonly sidebarHiddenChanged = new EventEmitter<boolean>();
  readonly asideHiddenChanged = new EventEmitter<boolean>();
  readonly topbarHiddenChanged = new EventEmitter<boolean>();

  enableLayout(layoutType: string) {
    this.layoutEnabled.emit(layoutType);
  }

  disableLayout(layoutType: string) {
    this.layoutDisabled.emit(layoutType);
  }

  hideSidebar() {
    this.sidebarHiddenChanged.emit(true);
  }

  showSidebar() {
    this.sidebarHiddenChanged.emit(false);
  }

  hideAside() {
    this.asideHiddenChanged.emit(true);
  }

  showAside() {
    this.asideHiddenChanged.emit(false);
  }
}
