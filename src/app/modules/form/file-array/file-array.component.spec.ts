import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileArrayComponent } from './file-array.component';

describe('FileArrayComponent', () => {
  let component: FileArrayComponent;
  let fixture: ComponentFixture<FileArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
