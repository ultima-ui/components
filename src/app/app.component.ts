import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  UltLayoutModule,
  UltIncidentsModule,
  UltNavigationModule,
  UltIconModule
} from '@ultima-ui/components';
import { IncidentsService } from './incidents.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UltLayoutModule,
    UltIncidentsModule,
    UltNavigationModule,
    UltIconModule,
    RouterLink
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  location = inject(Location);
  private _incidentsService = inject(IncidentsService);
  incidents$ = this._incidentsService.getIncidents();
  height: string | null = '200px';

  @ViewChild('navigation', { static: true })
  navigation!: any;

  navItems = [
    {
      type: 'heading',
      name: 'Main'
    },
    {
      type: 'link',
      name: 'Overview',
      link: '/overview'
    },
    {
      type: 'link',
      name: 'Install',
      link: '/components/install'
    },
    {
      type: 'link',
      name: 'Layout',
      link: '/components/layout'
    },
    {
      type: 'heading',
      name: 'Apps'
    },
    {
      type: 'link',
      name: 'Favicon Generator',
      link: '/apps/favicon-generator'
    },
    {
      type: 'link',
      name: 'Monaco Editor',
      link: '/apps/monaco-editor'
    },
    {
      type: 'heading',
      name: 'Navigation'
    },
    {
      type: 'link',
      name: 'Navigation',
      link: '/components/navigation'
    },
    {
      type: 'link',
      name: 'Breadcrumbs',
      link: '/components/breadcrumbs'
    },
    {
      type: 'link',
      name: 'Tab Panel',
      link: '/components/tab-panel'
    },
    {
      type: 'heading',
      name: 'Forms'
    },
    {
      type: 'link',
      name: 'Text Input',
      link: '/components/text-input'
    },
    {
      type: 'link',
      name: 'Textarea',
      link: '/components/textarea'
    },
    {
      type: 'link',
      name: 'Button',
      link: '/components/button'
    },
    {
      type: 'link',
      name: 'Switch',
      link: '/components/switch'
    },
    {
      type: 'link',
      name: 'Checkbox',
      link: '/components/checkbox'
    },
    {
      type: 'link',
      name: 'Radio',
      link: '/components/radio'
    },
    {
      type: 'link',
      name: 'Segmented',
      link: '/components/segmented'
    },
    {
      type: 'link',
      name: 'Select',
      link: '/components/select'
    },
    {
      type: 'heading',
      name: 'Components'
    },
    {
      type: 'link',
      name: 'Alert',
      link: '/components/alert'
    },
    {
      type: 'link',
      name: 'Incidents',
      link: '/components/incidents'
    },
    {
      type: 'link',
      name: 'Spinner',
      link: '/components/spinner'
    },
    {
      type: 'link',
      name: 'Expand',
      link: '/components/expand'
    },
    {
      type: 'link',
      name: 'Icon',
      link: '/components/icon'
    },
    {
      type: 'link',
      name: 'Badge',
      link: '/components/badge'
    },
    {
      type: 'link',
      name: 'Avatar',
      link: '/components/avatar'
    },
    {
      type: 'link',
      name: 'Accordion',
      link: '/components/accordion'
    },
    {
      type: 'link',
      name: 'Chip',
      link: '/components/chip'
    },
    {
      type: 'link',
      name: 'Tabs',
      link: '/components/tabs'
    },
    {
      type: 'link',
      name: 'Menu',
      link: '/components/menu'
    },
    {
      type: 'link',
      name: 'Paginator',
      link: '/components/paginator'
    },
    {
      type: 'link',
      name: 'Popover',
      link: '/components/popover'
    },
    {
      type: 'link',
      name: 'Tooltip',
      link: '/components/tooltip'
    },
    {
      type: 'link',
      name: 'Gauge',
      link: '/components/gauge'
    },
    {
      type: 'link',
      name: 'Slider',
      link: '/components/slider'
    },
    {
      type: 'link',
      name: 'Dialog',
      link: '/components/dialog'
    },
    {
      type: 'link',
      name: 'Upload',
      link: '/components/upload'
    },
    {
      type: 'link',
      name: 'Panel',
      link: '/components/panel'
    },
    {
      type: 'link',
      name: 'Resizable Container',
      link: '/components/resizable-container'
    },
    {
      type: 'link',
      name: 'Notification',
      link: '/components/notification'
    },
    {
      type: 'link',
      name: 'Command Bar',
      link: '/components/command-bar'
    },
    {
      type: 'link',
      name: 'Date Picker',
      link: '/components/date-picker'
    },
    {
      type: 'link',
      name: 'Color Picker',
      link: '/components/color-picker'
    },
    {
      type: 'link',
      name: 'Skeleton',
      link: '/components/skeleton'
    }
  ];
  activeLinkId: any = '/';

  ngOnInit() {
    this._activateLink();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        this._activateLink();
      })
    ;
  }

  get hasIncidents(): boolean {
    return this._incidentsService.hasIncidents();
  }

  private _activateLink() {
    const activeLink = this.navItems.find(navItem => navItem.type === 'link' && navItem.link === this.location.path());

    if (activeLink) {
      this.activeLinkId = activeLink.link;
    } else {
      this.activeLinkId = null;
    }
  }
}
