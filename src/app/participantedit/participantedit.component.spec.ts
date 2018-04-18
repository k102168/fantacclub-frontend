import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteditComponent } from './participantedit.component';

describe('ParticipanteditComponent', () => {
  let component: ParticipanteditComponent;
  let fixture: ComponentFixture<ParticipanteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipanteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
