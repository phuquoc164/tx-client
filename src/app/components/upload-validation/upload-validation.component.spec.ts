import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadValidationComponent } from './upload-validation.component';

describe('UploadValidationComponent', () => {
  let component: UploadValidationComponent;
  let fixture: ComponentFixture<UploadValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
