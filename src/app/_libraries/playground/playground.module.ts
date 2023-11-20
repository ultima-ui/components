import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';
import { PlaygroundPropertiesComponent } from './playground-properties/playground-properties.component';
import { PlaygroundSourceComponent } from './playground-source/playground-source.component';
import { PlaygroundControlsComponent } from './playground-controls/playground-controls.component';
import { PlaygroundContentComponent } from './playground-content/playground-content.component';
import { UltButtonModule, UltIconModule } from '@ultima-ui/components';

@NgModule({
  declarations: [
    PlaygroundComponent,
    PlaygroundPropertiesComponent,
    PlaygroundSourceComponent,
    PlaygroundControlsComponent,
    PlaygroundContentComponent
  ],
  imports: [
    CommonModule,
    UltButtonModule,
    UltIconModule
  ],
  exports: [
    PlaygroundComponent,
    PlaygroundPropertiesComponent,
    PlaygroundSourceComponent,
    PlaygroundControlsComponent,
    PlaygroundContentComponent
  ]
})
export class PlaygroundModule { }
