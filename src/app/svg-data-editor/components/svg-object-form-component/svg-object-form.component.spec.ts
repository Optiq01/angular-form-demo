import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgObjectFormComponent } from './svg-object-form.component';

describe('SvgObjectFormComponent', () => {
  let component: SvgObjectFormComponent;
  let fixture: ComponentFixture<SvgObjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgObjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgObjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
