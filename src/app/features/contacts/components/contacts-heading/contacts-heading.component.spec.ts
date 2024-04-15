import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsHeadingComponent } from './contacts-heading.component';

describe('ContactsHeadingComponent', () => {
  let component: ContactsHeadingComponent;
  let fixture: ComponentFixture<ContactsHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
