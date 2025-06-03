import { Component, input } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  gifsList = input<Item[]>();
}
