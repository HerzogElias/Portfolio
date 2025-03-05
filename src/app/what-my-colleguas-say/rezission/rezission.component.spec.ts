import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezissionComponent } from './rezission.component';

describe('RezissionComponent', () => {
  let component: RezissionComponent;
  let fixture: ComponentFixture<RezissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
