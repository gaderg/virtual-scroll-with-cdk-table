import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVirtualScrollComponent } from './table-virtual-scroll.component';

describe('TableVirtualScrollComponent', () => {
  let component: TableVirtualScrollComponent;
  let fixture: ComponentFixture<TableVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVirtualScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
