import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { RestitutionComponent } from './components/restitution/restitution.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { routes } from './shared/routes';
import { FileSelectionComponent } from './components/file-selection/file-selection.component';
import { FileDetailComponent } from './components/file-detail/file-detail.component';
import { FileSettingComponent } from './components/file-setting/file-setting.component';
import { FileInfosComponent } from './components/file-infos/file-infos.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UploadValidationComponent } from './components/upload-validation/upload-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    RestitutionComponent,
    FileSelectionComponent,
    FileDetailComponent,
    FileSettingComponent,
    FileInfosComponent,
    ProgressBarComponent,
    UploadValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),//{ onSameUrlNavigation: 'reload' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
