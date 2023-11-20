import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltIncidentsModule } from '@ultima-ui/components';
import { PlaygroundModule } from '../../_libraries/playground/playground.module';
import { CodeBlockComponent } from '../../_libraries/code-block/code-block.component';
import { IncidentsService } from '../../incidents.service';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [
    CommonModule,
    UltIncidentsModule,
    PlaygroundModule,
    CodeBlockComponent
  ],
  templateUrl: './incidents.component.html'
})
export class IncidentsComponent implements OnInit, OnDestroy {
  private _incidentsService = inject(IncidentsService);

  importModule = `import { UltIncidentsModule } from '@ultima-ui/components';`;

  ngOnInit() {
    this._incidentsService.setIncidents([
      {
        title: 'Maintenance work on the DNS API',
        details: 'ssss'
      },
      {
        title: 'Maintenance work on the DNS API',
        details: 'ssss'
      }
    ]);
  }

  ngOnDestroy() {
    this._incidentsService.setIncidents([]);
  }
}
