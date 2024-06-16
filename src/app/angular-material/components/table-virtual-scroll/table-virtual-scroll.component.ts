import { ChangeDetectorRef, Component, NgZone, QueryList, ViewChildren } from '@angular/core';
import { DataSharingService } from '../../../services/data-sharing.service';
import { Observable, Subscription, firstValueFrom, map } from 'rxjs';
import { EmployeeDeatails } from '../../../models/employee.model';
import { CdkRow, CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-virtual-scroll',
  standalone: true,
  imports: [CdkTableModule, ScrollingModule, MatProgressSpinnerModule, CommonModule],
  templateUrl: './table-virtual-scroll.component.html',
  styleUrl: './table-virtual-scroll.component.scss'
})

export class TableVirtualScrollComponent {

  constructor(private dataSharingService: DataSharingService, private ngZone: NgZone,
    private cdr: ChangeDetectorRef) { }

  isLoading: boolean = true;
  private subscription: Subscription = new Subscription();
  employeesList: Observable<EmployeeDeatails[]> = this.dataSharingService.getEmployeeDetails();
  displayedColumns: string[] = ['id', 'name'];
  @ViewChildren(CdkRow) rows!: QueryList<CdkRow>;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.subscription.add(this.rows.changes.subscribe(() => {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.ngZone.run(() => {
              this.isLoading = false;
              console.log('Rows have been fully rendered');
            });
          });
        });
      });
    }));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}


