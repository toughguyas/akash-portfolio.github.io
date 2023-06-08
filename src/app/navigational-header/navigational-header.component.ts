import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigational-header',
  templateUrl: './navigational-header.component.html',
  styleUrls: ['./navigational-header.component.css']
})
export class NavigationalHeaderComponent implements OnInit {
  public navToggle = false;
  public toggleMenuIcon = false;
 
  constructor() {

  }
  public ngOnInit(): void {
    window.onresize = () => this.navToggle = window.innerWidth <= 1130;
  }
  public myFunction() {
    this.toggleMenuIcon = !this.toggleMenuIcon;
  }
}
