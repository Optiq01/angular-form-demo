import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoxFormComponent } from './view-box-form.component';

describe('ViewBoxComponent', () => {
  let component: ViewBoxFormComponent;
  let fixture: ComponentFixture<ViewBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
