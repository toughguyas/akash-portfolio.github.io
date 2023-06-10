import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akash-portfolio';
  constructor(private activatedRoute:ActivatedRoute) {

  }
  public ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(res=>{
      console.log(res)
      this.jumptoabout(res);
    });  
}
 
  public jumptoabout(res:any) {
    setTimeout(() => {
      document.getElementById(res)?.scrollIntoView({behavior: "smooth"});
    }, 1000);
  }
}
