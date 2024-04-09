import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHighlightsComponent } from './about-highlights.component';

describe('AboutHighlightsComponent', () => {
  let component: AboutHighlightsComponent;
  let fixture: ComponentFixture<AboutHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
