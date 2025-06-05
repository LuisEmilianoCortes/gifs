import { Component, inject } from '@angular/core';
import { MenuOption } from '@interfaces/menu-option.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from '@services/gifs.service';

@Component({
  selector: 'gifs-side-menu-options',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  gifsService = inject(GifsService);

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Tranding',
      subLabel: 'Gifs  Populates',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscador Gifs',
      route: '/dashboard/search',
    },
  ];
}
