import { GifsService } from '@services/gifs.service';
import { Component, inject } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './trending-page.component.html'
})
export default class TrendingPageComponent {

  gifs: Item[] = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      alt: 'image.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      alt: 'image-1.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      alt: 'image-2.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      alt: 'image-3.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      alt: 'image-4.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      alt: 'image-5.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      alt: 'image-6.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      alt: 'image-7.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      alt: 'image-8.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      alt: 'image-9.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      alt: 'mage-10.jpg'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      alt: 'mage-11.jpg'
    },
  ]

  gifsServices = inject(GifsService)

}
