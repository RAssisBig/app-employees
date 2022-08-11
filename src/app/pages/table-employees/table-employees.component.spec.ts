import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmployeesComponent } from './table-employees.component';

describe('TableEmployeesComponent', () => {
  let component: TableEmployeesComponent;
  let fixture: ComponentFixture<TableEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
