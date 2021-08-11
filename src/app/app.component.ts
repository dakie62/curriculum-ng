import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static MAX_WIDTH = "1100";

  public title = 'curriculum';

  public bigTitles = {
    curriculum: 'Curriculum Vitae',
    guideline: 'Guideline',
    about_me: 'About Me',
    experiences: 'My Experiences',
    skills: 'My Skills',
    hobbies: 'My Hobbies/ Gallery'
  }

  public selectedGuidelinePanel = this.bigTitles.about_me;
  public displayLandingScapePage = false;

  ngOnInit() {
    console.log(window.innerWidth);
    this.displayLandingScapePage = window.innerWidth < +AppComponent.MAX_WIDTH ? true : false
  }


  @HostListener('window:resize', ['$event'])
  public onResizeScreen(event: any) {
    this.displayLandingScapePage = event.target.innerWidth < AppComponent.MAX_WIDTH ? true : false;
  }

  scrollToSection(el: HTMLElement, bigTitle: string) {
    this.selectedGuidelinePanel = bigTitle;
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
