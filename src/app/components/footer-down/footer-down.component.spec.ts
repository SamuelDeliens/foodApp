import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDownComponent } from './footer-down.component';

describe('FooterDownComponent', () => {
  let component: FooterDownComponent;
  let fixture: ComponentFixture<FooterDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterDownComponent]
    });
    fixture = TestBed.createComponent(FooterDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
