import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHotComponent } from './table-hot.component';

describe('TableHotComponent', () => {
  let component: TableHotComponent;
  let fixture: ComponentFixture<TableHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
