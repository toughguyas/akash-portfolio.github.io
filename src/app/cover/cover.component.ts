import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  public work = [ 'FULL STACK DEVELOPER' , 'PHILOLOGIST', 'ENTERTAINER','LOVER']
  public assignwork= 'FULL STACK DEVELOPER' ;
  public j=1;
  constructor() {

  }
  public ngOnInit(): void {
        setInterval(()=>{
          this.assignwork = this.work[this.j];
          this.j=this.j+1;
          if(this.j==4) {
            this.j=0;
          }
        },2000);    
  }

}
