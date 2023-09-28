import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MousvntechnicalComponent } from './mousvntechnical.component';

describe('MousvntechnicalComponent', () => {
  let component: MousvntechnicalComponent;
  let fixture: ComponentFixture<MousvntechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MousvntechnicalComponent]
    });
    fixture = TestBed.createComponent(MousvntechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
