import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';

import { ScrollStateService } from '@shared/services/scroll-state.service';
import { GifsService } from '@services/gifs.service';

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent implements AfterViewInit {

  gifsServices = inject(GifsService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = this.scrollStateService.trendingScrollState();
    scrollDiv.scrollTop = scrollTop;
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollDiv;
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifsServices.loadTrendingGifs();
    }
  }
}
