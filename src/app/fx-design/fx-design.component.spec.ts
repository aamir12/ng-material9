import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxDesignComponent } from './fx-design.component';

describe('FxDesignComponent', () => {
  let component: FxDesignComponent;
  let fixture: ComponentFixture<FxDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
