import { Component, input } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Gif } from '@interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  gifsList = input<Gif[]>();
}
