import { Component, inject, signal } from '@angular/core';
import { ListComponent } from '@components/list/list.component';
import { GifsService } from '@services/gifs.service';
import { Gif } from '@interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifService = inject(GifsService);
  gifs = signal<Gif[]>([])

  onSearch(query: string) {
    this.gifService.searchGifs(query)
      .subscribe(this.gifs.set)
  }
}
