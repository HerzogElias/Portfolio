import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatMyColleguasSayComponent } from './what-my-colleguas-say.component';

describe('WhatMyColleguasSayComponent', () => {
  let component: WhatMyColleguasSayComponent;
  let fixture: ComponentFixture<WhatMyColleguasSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatMyColleguasSayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatMyColleguasSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
