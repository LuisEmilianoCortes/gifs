import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { environment } from '@environments/environment';
import type { GiphyResponse } from '@interfaces/giphy.interface';
import { Gif } from '@interfaces/gif.interface';
import { GifMapper } from '@mappers/gif.mapper';
import { LocalStorageFunctions } from 'src/app/shared/utilities';

const LOCALSTORAGE_KEY = 'gifs';
const GIFS_CHUNKS_SIZE = 3;

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  isTrendingGifsLoading = signal<boolean>(false);
  private trendingPage = signal<number>(0);

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    const gifs = this.trendingGifs();
    for (let i = 0; i < gifs.length; i+=GIFS_CHUNKS_SIZE) {
      groups.push(gifs.slice(i, i + GIFS_CHUNKS_SIZE));
    }
    console.log(groups);

    return groups;
  })

  searchHistory = signal<Record<string, Gif[]>>(
    LocalStorageFunctions.loadFromLocalStorege(LOCALSTORAGE_KEY)
  );
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  saveGifsToLocalStorage = effect(() => {
    LocalStorageFunctions.saveToLocalStorage(
      LOCALSTORAGE_KEY,
      this.searchHistory()
    );
  });

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    const { giphyUrl, giphyApiKey, giphyLimit } = environment;
    if (this.isTrendingGifsLoading()) return;

    this.isTrendingGifsLoading.set(true);

    return this.http
      .get<GiphyResponse>(`${giphyUrl}/gifs/trending`, {
        params: {
          api_key: giphyApiKey,
          limit: giphyLimit,
          offset: this.trendingPage() * giphyLimit,
          rating: 'g',
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphysToGifArray(resp.data);
        this.trendingGifs.update((current) => [...current, ...gifs, ]);
        this.trendingPage.update((page) => page + 1);
        this.isTrendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    const { giphyUrl, giphyApiKey, giphyLimit } = environment;

    return this.http
      .get<GiphyResponse>(`${giphyUrl}/gifs/search`, {
        params: {
          api_key: giphyApiKey,
          q: query,
          limit: giphyLimit,
          offset: 0,
          rating: 'g',
        },
      })
      .pipe(
        map(({ data }) => GifMapper.mapGiphysToGifArray(data)),
        tap((gifs) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: gifs,
          }));
        })
      );
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory().hasOwnProperty(query.toLowerCase())
      ? this.searchHistory()[query.toLowerCase()]
      : [];
  }
}
