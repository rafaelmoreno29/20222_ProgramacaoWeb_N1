import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-topo',
  templateUrl: './menu-topo.component.html',
  styleUrls: ['./menu-topo.component.css']
})
export class MenuTopoComponent implements OnInit {
  estaAutenticado : boolean = true;
  menus : any = ["Menu 1", "Menu 2", "Menu 3"];
  constructor() { }

  ngOnInit(): void {
  }

}
