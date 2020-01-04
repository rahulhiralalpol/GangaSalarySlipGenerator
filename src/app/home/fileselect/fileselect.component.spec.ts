import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileselectComponent } from './fileselect.component';

describe('FileselectComponent', () => {
  let component: FileselectComponent;
  let fixture: ComponentFixture<FileselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
