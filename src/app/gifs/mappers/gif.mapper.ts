import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interface';

export class GifMapper {
  static mapGiphyItemToGif({ id, title, images }: GiphyItem): Gif {
    const { original } = images;
    return {
      id,
      title,
      url: original.url,
    };
  }

  static mapGiphysToGifArray(giphys: GiphyItem[]): Gif[] {
    return giphys.map(this.mapGiphyItemToGif);
  }
}
