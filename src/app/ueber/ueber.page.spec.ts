import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UeberPage } from './ueber.page';

describe('UeberPage', () => {
  let component: UeberPage;
  let fixture: ComponentFixture<UeberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UeberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
