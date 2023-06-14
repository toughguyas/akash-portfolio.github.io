import { Component } from '@angular/core';

@Component({
  selector: 'app-my-curriculum',
  templateUrl: './my-curriculum.component.html',
  styleUrls: ['./my-curriculum.component.css']
})
export class MyCurriculumComponent {
  public edu = false;
  public exp = false;
  public skills = false;
  public award = false;
  public goto (str:string){
   if(str === 'Education') {
    this.edu = true;
    this.exp = false;
    this.skills = false;
    this.award = false;

   } else if(str === 'Experience') {
    this.edu = false;
    this.exp = true;
    this.skills = false;
    this.award = false;

   } else if(str === 'Skills') {
    this.edu = false;
    this.exp = false;
    this.skills = true;
    this.award = false;

   } else if(str === 'Awards') {
    this.edu = false;
    this.exp = false;
    this.skills = false;
    this.award = true;

   }
  }
}
