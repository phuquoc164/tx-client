import { RestitutionComponent } from './../components/restitution/restitution.component';
import { UploadComponent } from './../components/upload/upload.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'upload', component: UploadComponent, runGuardsAndResolvers: 'always' },
    { path: 'restitution', component: RestitutionComponent },
]  