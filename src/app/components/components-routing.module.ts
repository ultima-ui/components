import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./common/common.component').then(c => c.CommonComponent),
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        data: {
          breadcrumb: 'Overview'
        },
        loadComponent: () => import('./overview/overview.component').then(c => c.OverviewComponent)
      },
      {
        path: 'install',
        data: {
          breadcrumb: 'Install'
        },
        loadComponent: () => import('./install/install.component').then(c => c.InstallComponent)
      },
      {
        path: 'layout',
        data: {
          breadcrumb: 'Layout'
        },
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent)
      },
      {
        path: 'button',
        data: {
          breadcrumb: 'Button'
        },
        loadComponent: () => import('./button/button.component').then(c => c.ButtonComponent)
      },
      {
        path: 'text-input',
        data: {
          breadcrumb: 'Text Input'
        },
        loadComponent: () => import('./text-input/text-input.component').then(c => c.TextInputComponent)
      },
      {
        path: 'textarea',
        data: {
          breadcrumb: 'Textarea'
        },
        loadComponent: () => import('./textarea/textarea.component').then(c => c.TextareaComponent)
      },
      {
        path: 'switch',
        data: {
          breadcrumb: 'Switch'
        },
        loadComponent: () => import('./switch/switch.component').then(c => c.SwitchComponent)
      },
      {
        path: 'checkbox',
        data: {
          breadcrumb: 'Checkbox'
        },
        loadComponent: () => import('./checkbox/checkbox.component').then(c => c.CheckboxComponent)
      },
      {
        path: 'radio',
        data: {
          breadcrumb: 'Radio'
        },
        loadComponent: () => import('./radio/radio.component').then(c => c.RadioComponent)
      },
      {
        path: 'select',
        data: {
          breadcrumb: 'Select'
        },
        loadComponent: () => import('./select/select.component').then(c => c.SelectComponent)
      },
      {
        path: 'icon',
        data: {
          breadcrumb: 'Icon'
        },
        loadComponent: () => import('./icon/icon.component').then(c => c.IconComponent)
      },
      {
        path: 'spinner',
        data: {
          breadcrumb: 'Spinner'
        },
        loadComponent: () => import('./spinner/spinner.component').then(c => c.SpinnerComponent)
      },
      {
        path: 'navigation',
        data: {
          breadcrumb: 'Navigation'
        },
        loadComponent: () => import('./navigation/navigation.component').then(c => c.NavigationComponent)
      },
      {
        path: 'badge',
        data: {
          breadcrumb: 'Badge'
        },
        loadComponent: () => import('./badge/badge.component').then(c => c.BadgeComponent)
      },
      {
        path: 'tabs',
        data: {
          breadcrumb: 'Tabs'
        },
        loadComponent: () => import('./tabs/tabs.component').then(c => c.TabsComponent)
      },
      {
        path: 'breadcrumbs',
        data: {
          breadcrumb: 'Breadcrumbs'
        },
        loadComponent: () => import('./breadcrumbs/breadcrumbs.component').then(c => c.BreadcrumbsComponent)
      },
      {
        path: 'tab-panel',
        data: {
          breadcrumb: 'Tab Panel'
        },
        loadComponent: () => import('./tab-panel/tab-panel.component').then(c => c.TabPanelComponent)
      },
      {
        path: 'avatar',
        data: {
          breadcrumb: 'Avatar'
        },
        loadComponent: () => import('./avatar/avatar.component').then(c => c.AvatarComponent)
      },
      {
        path: 'accordion',
        data: {
          breadcrumb: 'Accordion'
        },
        loadComponent: () => import('./accordion/accordion.component').then(c => c.AccordionComponent)
      },
      {
        path: 'chip',
        data: {
          breadcrumb: 'Chip'
        },
        loadComponent: () => import('./chip/chip.component').then(c => c.ChipComponent)
      },
      {
        path: 'menu',
        data: {
          breadcrumb: 'Menu'
        },
        loadComponent: () => import('./menu/menu.component').then(c => c.MenuComponent)
      },
      {
        path: 'popover',
        data: {
          breadcrumb: 'Popover'
        },
        loadComponent: () => import('./popover/popover.component').then(c => c.PopoverComponent)
      },
      {
        path: 'tooltip',
        data: {
          breadcrumb: 'Tooltip'
        },
        loadComponent: () => import('./tooltip/tooltip.component').then(c => c.TooltipComponent)
      },
      {
        path: 'gauge',
        data: {
          breadcrumb: 'Gauge'
        },
        loadComponent: () => import('./gauge/gauge.component').then(c => c.GaugeComponent)
      },
      {
        path: 'slider',
        data: {
          breadcrumb: 'Slider'
        },
        loadComponent: () => import('./slider/slider.component').then(c => c.SliderComponent)
      },
      {
        path: 'dialog',
        data: {
          breadcrumb: 'Dialog'
        },
        loadComponent: () => import('./dialog/dialog.component').then(c => c.DialogComponent)
      },
      {
        path: 'alert',
        data: {
          breadcrumb: 'Alert'
        },
        loadComponent: () => import('./alert/alert.component').then(c => c.AlertComponent)
      },
      {
        path: 'incidents',
        data: {
          breadcrumb: 'Incidents'
        },
        loadComponent: () => import('./incidents/incidents.component').then(c => c.IncidentsComponent)
      },
      {
        path: 'paginator',
        data: {
          breadcrumb: 'Paginator'
        },
        loadComponent: () => import('./paginator/paginator.component').then(c => c.PaginatorComponent)
      },
      {
        path: 'upload',
        data: {
          breadcrumb: 'Upload'
        },
        loadComponent: () => import('./upload/upload.component').then(c => c.UploadComponent)
      },
      {
        path: 'panel',
        data: {
          breadcrumb: 'Panel'
        },
        loadComponent: () => import('./panel/panel.component').then(c => c.PanelComponent)
      },
      {
        path: 'notification',
        data: {
          breadcrumb: 'Notification'
        },
        loadComponent: () => import('./notification/notification.component').then(c => c.NotificationComponent)
      },
      {
        path: 'date-picker',
        data: {
          breadcrumb: 'Date Picker'
        },
        loadComponent: () => import('./date-picker/date-picker.component').then(c => c.DatePickerComponent)
      },
      {
        path: 'color-picker',
        data: {
          breadcrumb: 'Color Picker'
        },
        loadComponent: () => import('./color-picker/color-picker.component').then(c => c.ColorPickerComponent)
      },
      {
        path: 'skeleton',
        data: {
          breadcrumb: 'Skeleton'
        },
        loadComponent: () => import('./skeleton/skeleton.component').then(c => c.SkeletonComponent)
      },
      {
        path: 'resizable-container',
        data: {
          breadcrumb: 'Resizable Container'
        },
        loadComponent: () => import('./resizable-container/resizable-container.component').then(c => c.ResizableContainerComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
