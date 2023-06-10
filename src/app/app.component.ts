import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akash-portfolio';
  constructor(private activatedRoute:ActivatedRoute,
    private router: Router) {

  }
  public ngOnInit(): void {
    this.activatedRoute.fragment.subscribe(res=>{
      this.jumptoabout(res);
    });  
}
@HostListener("window:scroll", [])onWindowScroll() {
  let a = window.scrollY.valueOf();
  let e = document.getElementById('home')?.scrollHeight.valueOf();
  let b = document.getElementById('AboutMe')?.scrollHeight.valueOf();
  console.log(a,"e",e,"b",b);
  b = ( b === undefined?0:b);
  e = ( e === undefined?0:e)
  if( a> e && a<b){
    this.router.navigate([''],{fragment: 'MY_Home'}) 
  }
  else if(a > b ) {
   this.router.navigate([''],{fragment: 'ABOUT_ME'})
  }
}
 
public jumptoabout(res:any) {
    setTimeout(() => {
      if(document.getElementById(res) === null){
        return;
      }
      let f= document.getElementById(res)?.scrollHeight.valueOf();
      f = ( f === undefined?0:f);
      window.scrollTo(0,f);
    }, 1000);
  }
}
