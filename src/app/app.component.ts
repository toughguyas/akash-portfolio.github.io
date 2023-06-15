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
  let p = window.scrollY.valueOf();
  let a = document.getElementById('AboutMe');
  let r = document.getElementById('resume');
  const elep = a ?.getBoundingClientRect().top? a ?.getBoundingClientRect().top:0;
  const relep = r ?.getBoundingClientRect().top? r ?.getBoundingClientRect().top:0;
  const aposition = elep + window.pageYOffset -80;
  const rposition = relep + window.pageYOffset -80;

  if( p< aposition){
    this.router.navigate([''],{fragment: 'My_HOME'});
  } else if( p >= aposition && p < rposition){
    this.router.navigate([''],{fragment: 'ABOUT_ME'});  
  } else {
    this.router.navigate([''],{fragment: 'My_RESUME'});
  }
}
 
public jumptoabout(res:any) {
    setTimeout(() => {
      
      if(document.getElementById(res) === null){
        return;
      }
      const targetEle = document.getElementById(res);
      const elep = targetEle ?.getBoundingClientRect().top? targetEle ?.getBoundingClientRect().top:0;
      const position = elep + window.pageYOffset -80;
      // document.getElementById(res)?.scrollIntoView();
      window.scrollTo(
        {top: position,
          behavior: 'smooth'
        }
      )
      
    }, 0);
  }
}
