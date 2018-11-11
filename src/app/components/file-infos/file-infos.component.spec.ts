import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInfosComponent } from './file-infos.component';

describe('FileInfosComponent', () => {
  let component: FileInfosComponent;
  let fixture: ComponentFixture<FileInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
