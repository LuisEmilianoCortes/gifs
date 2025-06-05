import { GifsService } from '@services/gifs.service';
import { Component, inject } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './trending-page.component.html'
})
export default class TrendingPageComponent {

  gifsServices = inject(GifsService)

}
