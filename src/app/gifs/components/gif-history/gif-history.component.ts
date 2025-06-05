import { GifsService } from '@services/gifs.service';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'gif-history',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  GifsService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'] || ''))
  );

  gifsByKey = computed(() => this.GifsService.getHistoryGifs(this.query()));
}
