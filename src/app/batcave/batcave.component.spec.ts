import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatcaveComponent } from './batcave.component';

describe('BatcaveComponent', () => {
  let component: BatcaveComponent;
  let fixture: ComponentFixture<BatcaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatcaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatcaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
