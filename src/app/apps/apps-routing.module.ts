import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'favicon-generator',
  //   loadComponent: () => import('./favicon-generator/favicon-generator.component').then(c => c.FaviconGeneratorComponent),
  //   data: {
  //     breadcrumb: 'Favicon Generator'
  //   }
  // },
  {
    path: 'monaco-editor',
    loadComponent: () => import('./monaco-editor/monaco-editor.component').then(c => c.MonacoEditorComponent),
    data: {
      breadcrumb: 'Monaco Editor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
