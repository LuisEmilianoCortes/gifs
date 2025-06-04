import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '@interfaces/giphy.interface';
import { Gif } from '@interfaces/gif.interface';
import { GifMapper } from '@mappers/gif.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    const { giphyUrl, giphyApiKey, giphyLimit } = environment;

    return this.http
      .get<GiphyResponse>(`${giphyUrl}/gifs/trending`, {
        params: {
          api_key: giphyApiKey,
          limit: giphyLimit,
          offset: 0,
          rating: 'g',
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphysToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log(gifs);
      });
  }

 searchGifs(query: string) {
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
        map(({ data }) => GifMapper.mapGiphysToGifArray(data))
      );
  }

}
