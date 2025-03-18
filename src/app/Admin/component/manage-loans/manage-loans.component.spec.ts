import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLoansComponent } from './manage-loans.component';

describe('ManageLoansComponent', () => {
  let component: ManageLoansComponent;
  let fixture: ComponentFixture<ManageLoansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageLoansComponent]
    });
    fixture = TestBed.createComponent(ManageLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
