import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';


@Component({
  selector: 'gifs-side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-header.component.html'
})
export class SideMenuHeaderComponent {
  env = environment;

}
