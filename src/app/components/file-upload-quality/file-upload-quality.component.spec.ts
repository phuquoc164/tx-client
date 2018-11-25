import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadQualityComponent } from './file-upload-quality.component';

describe('FileUploadQualityComponent', () => {
  let component: FileUploadQualityComponent;
  let fixture: ComponentFixture<FileUploadQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
