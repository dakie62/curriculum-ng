import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './section/about-me/about-me.component';
import { SkillsComponent } from './section/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
