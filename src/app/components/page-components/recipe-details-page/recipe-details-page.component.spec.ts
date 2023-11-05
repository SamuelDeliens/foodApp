import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailsPageComponent } from './recipe-details-page.component';

describe('RecipeDetailsPageComponent', () => {
  let component: RecipeDetailsPageComponent;
  let fixture: ComponentFixture<RecipeDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailsPageComponent]
    });
    fixture = TestBed.createComponent(RecipeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
