import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDataEditorShellComponent } from './svg-data-editor-shell.component';

describe('SvgDataEditorShellComponent', () => {
  let component: SvgDataEditorShellComponent;
  let fixture: ComponentFixture<SvgDataEditorShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDataEditorShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDataEditorShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
