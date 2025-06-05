import { Component, input } from '@angular/core';
import { Gif } from '@interfaces/gif.interface';

@Component({
  selector: 'gifs-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {

  item = input<Gif>()

}
