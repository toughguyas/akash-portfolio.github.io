import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit  {
  public work = [ `It’s not a bug. It’s an undocumented feature!` , `If you think math is hard, try web design.`, 'What separates design from art is that design is meant to be… functional.',`I don’t care if it works on your machine! We are not shipping your machine!`]
  public assignwork= `It’s not a bug. It’s an undocumented feature!` ;
  public j=1;
  public ngOnInit(): void {
    setInterval(()=>{
      this.assignwork = this.work[this.j];
      this.j=this.j+1;
      if(this.j==4) {
        this.j=0;
      }
    },5000);
     
}
}
