import { Component, input } from '@angular/core';
import { Item } from 'src/app/gifs/interfaces/item.interface';

@Component({
  selector: 'gifs-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {

  item = input<Item>()

}
