import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoKeyComponent } from './piano-key.component';

describe('PianoKeyComponent', () => {
  let component: PianoKeyComponent;
  let fixture: ComponentFixture<PianoKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianoKeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
