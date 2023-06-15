import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akash-portfolio';
  public edu = false;
  public exp = false;
  public skills = false;
  public award = false;
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
  let exp = document.getElementById('experience');
  const elepexp = exp ?.getBoundingClientRect().top? exp ?.getBoundingClientRect().top:0;
  const expposition = elepexp + window.pageYOffset -80;
  let edu = document.getElementById('educations');
  const elepedu = edu ?.getBoundingClientRect().top? edu ?.getBoundingClientRect().top:0;
  const eduposition = elepedu + window.pageYOffset -80;
  let skills = document.getElementById('skills');
  const elepskills = skills ?.getBoundingClientRect().top? skills ?.getBoundingClientRect().top:0;
  const skillsposition = elepskills + window.pageYOffset -80;
  let Awards = document.getElementById('Awards');
  const elepAwards = Awards ?.getBoundingClientRect().top? Awards ?.getBoundingClientRect().top:0;
  const Awardsposition = elepAwards + window.pageYOffset -80;
  console.log("akash",eduposition,p);
  if( p< aposition){
    this.router.navigate([''],{fragment: 'My_HOME'});

  } else if( p >= aposition && p < rposition){
    this.router.navigate([''],{fragment: 'ABOUT_ME'});  
  } else if(p>= rposition) {
    this.router.navigate([''],{fragment: 'My_RESUME'});
    if(p>=eduposition && p<expposition) {
      this.edu = true;
    this.exp = false;
    this.skills = false;
    this.award = false;
    } else if ( p>= expposition && p< skillsposition)
    {
      this.edu = false;
    this.exp = true;
    this.skills = false;
    this.award = false;
    } else if( p >= skillsposition && p< Awardsposition) {
      this.edu = false;
    this.exp = false;
    this.skills = true;
    this.award = false;
    } else {
    this.edu = false;
    this.exp = false;
    this.skills = false;
    this.award = true;
    }
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
