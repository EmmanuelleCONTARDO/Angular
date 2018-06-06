import { MenuService } from './../menu.service';
import { Menu } from './../menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
menu;
  constructor(public menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu;
  }
selectMenu (m: Menu) {
  this.menuService.selectedMenu = m;

}


}
