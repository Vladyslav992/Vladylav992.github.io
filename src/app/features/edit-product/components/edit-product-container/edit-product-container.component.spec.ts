import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductContainerComponent } from './edit-product-container.component';

describe('EditProductContainerComponent', () => {
  let component: EditProductContainerComponent;
  let fixture: ComponentFixture<EditProductContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
