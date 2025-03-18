import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloanComponent } from './payloan.component';

describe('PayloanComponent', () => {
  let component: PayloanComponent;
  let fixture: ComponentFixture<PayloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayloanComponent]
    });
    fixture = TestBed.createComponent(PayloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
