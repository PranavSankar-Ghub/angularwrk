import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwrkComponent } from './loginwrk.component';

describe('LoginwrkComponent', () => {
  let component: LoginwrkComponent;
  let fixture: ComponentFixture<LoginwrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginwrkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginwrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
