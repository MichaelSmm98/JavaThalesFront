import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeById } from './employee-by-id';

describe('EmployeeById', () => {
  let component: EmployeeById;
  let fixture: ComponentFixture<EmployeeById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeById);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
