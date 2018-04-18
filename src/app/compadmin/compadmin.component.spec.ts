import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompadminComponent } from './compadmin.component';

describe('CompadminComponent', () => {
  let component: CompadminComponent;
  let fixture: ComponentFixture<CompadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
