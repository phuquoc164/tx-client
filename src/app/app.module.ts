import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { RestitutionComponent } from './components/restitution/restitution.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { routes } from './shared/routes';
import { FileSelectionComponent } from './components/file-selection/file-selection.component';
import { FileDetailComponent } from './components/file-detail/file-detail.component';
import { FileSettingComponent } from './components/file-setting/file-setting.component';
import { FileInfosComponent } from './components/file-infos/file-infos.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UploadValidationComponent } from './components/upload-validation/upload-validation.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { FileUploadQualityComponent } from './components/file-upload-quality/file-upload-quality.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/', '.json');
}

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
    UploadValidationComponent,
    FileSelectDirective,
    FileUploadQualityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),//{ onSameUrlNavigation: 'reload' }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
