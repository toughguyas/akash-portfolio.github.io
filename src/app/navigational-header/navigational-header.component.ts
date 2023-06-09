import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigational-header',
  templateUrl: './navigational-header.component.html',
  styleUrls: ['./navigational-header.component.css']
})
export class NavigationalHeaderComponent implements OnInit {
  public navToggle = window.innerWidth <= 1130?true:false;
  public toggleMenuIcon = false;
 
  constructor() {

  }
  public ngOnInit(): void {
    window.onresize = () => this.navToggle = window.innerWidth <= 1130;
  }
  public myFunction() {
    this.toggleMenuIcon = !this.toggleMenuIcon;
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
}
