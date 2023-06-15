import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-curriculum',
  templateUrl: './my-curriculum.component.html',
  styleUrls: ['./my-curriculum.component.css']
})
export class MyCurriculumComponent {
  @Input() public edu = false;
  @Input() public exp = false;
  @Input() public skills = false;
  @Input() public award = false;
  public goto (str:string){
  
   }
  
}
