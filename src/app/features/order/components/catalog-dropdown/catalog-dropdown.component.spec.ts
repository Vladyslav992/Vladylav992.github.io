import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDropdownComponent } from './catalog-dropdown.component';

describe('CatalogDropdownComponent', () => {
  let component: CatalogDropdownComponent;
  let fixture: ComponentFixture<CatalogDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
