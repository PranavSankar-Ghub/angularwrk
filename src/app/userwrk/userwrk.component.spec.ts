import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwrkComponent } from './userwrk.component';

describe('UserwrkComponent', () => {
  let component: UserwrkComponent;
  let fixture: ComponentFixture<UserwrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserwrkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
