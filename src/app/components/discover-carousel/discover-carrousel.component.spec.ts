import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCarrouselComponent } from './discover-carrousel.component';

describe('CarrouselComponent', () => {
  let component: DiscoverCarrouselComponent;
  let fixture: ComponentFixture<DiscoverCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverCarrouselComponent]
    });
    fixture = TestBed.createComponent(DiscoverCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
