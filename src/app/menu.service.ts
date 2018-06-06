import { Menu } from './menu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() {
    // this.selectedMenu = this.menu[0];
  }

  public selectedMenu: Menu;

  menu: Menu[] = [
    {
      'id': 0,
      'name': 'rrrr',
      'description': 'v<x,w;nv,wfxc;v,nfwb ;v,ncw;,vbnwc;,nbc',
    },
    {
      'id': 1,
      'name': 'Contacts',
      'description': 'xv<x,w;nv,wfxc;v,nfwb ;v,ncw;,vbnwc;,nbc',
    },
    {
      'id': 2,
      'name': 'Réalisations',
      'description': 'xv<x,w;nv,wfxc;v,nfwb ;v,ncw;,vbnwc;,nbc',
    }
  ];


}
