import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableVirtualScrollComponent } from "./angular-material/components/table-virtual-scroll/table-virtual-scroll.component";
import { HttpClientModule } from '@angular/common/http';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [DataSharingService],
  imports: [RouterOutlet, TableVirtualScrollComponent, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'Iw-Sanity-List';
}
