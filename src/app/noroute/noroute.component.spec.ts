import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorouteComponent } from './noroute.component';

describe('NorouteComponent', () => {
  let component: NorouteComponent;
  let fixture: ComponentFixture<NorouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
