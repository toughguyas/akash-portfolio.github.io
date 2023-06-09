import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  public work = [ 'FULL STACK DEVELOPER' , 'PHILOLOGIST', 'ENTERTAINER','LOVER']
  public assignwork= 'FULL STACK DEVELOPER' ;
  public j=1;
  constructor(private activatedRoute:ActivatedRoute) {

  }
  public ngOnInit(): void {
        setInterval(()=>{
          this.assignwork = this.work[this.j];
          this.j=this.j+1;
          if(this.j==4) {
            this.j=0;
          }
        },2000);
        this.activatedRoute.fragment.subscribe(res=>{
          console.log(res)
          this.jumptoabout(res);
        })    
  }
  public jumptoabout(res:any) {
    setTimeout(() => {
      document.getElementById(res)?.scrollIntoView({behavior: "smooth"});
    }, 1000);
  }
}
