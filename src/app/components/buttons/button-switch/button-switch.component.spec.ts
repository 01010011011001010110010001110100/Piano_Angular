import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSwitchComponent } from './button-switch.component';

describe('ButtonSwitchComponent', () => {
  let component: ButtonSwitchComponent;
  let fixture: ComponentFixture<ButtonSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
