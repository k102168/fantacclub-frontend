import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditcomponentComponent } from './usereditcomponent.component';

describe('UsereditcomponentComponent', () => {
  let component: UsereditcomponentComponent;
  let fixture: ComponentFixture<UsereditcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsereditcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsereditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
