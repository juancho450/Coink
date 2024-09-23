import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterFinalizePage } from './register-finalize.page';

describe('RegisterFinalizePage', () => {
  let component: RegisterFinalizePage;
  let fixture: ComponentFixture<RegisterFinalizePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFinalizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
