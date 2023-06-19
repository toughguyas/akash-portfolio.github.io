import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NavigationalHeaderComponent } from './navigational-header/navigational-header.component';
import { CoverComponent } from './cover/cover.component';
import { ResumeComponent } from './resume/resume.component';
import { MyCurriculumComponent } from './my-curriculum/my-curriculum.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    NavigationalHeaderComponent,
    CoverComponent,
    ResumeComponent,
    MyCurriculumComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
