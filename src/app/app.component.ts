import { Component, HostListener, OnInit } from '@angular/core';
import { icons } from './fa-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static MAX_WIDTH = "1100";
  private currentSection: HTMLElement | undefined;

  public icons = icons;
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
    this.displayLandingScapePage = window.innerWidth < +AppComponent.MAX_WIDTH ? true : false;
  }


  @HostListener('window:resize', ['$event'])
  public onResizeScreen(event: any) {
    this.displayLandingScapePage = event.target.innerWidth < AppComponent.MAX_WIDTH ? true : false;
  }

  public scrollToSection(el: HTMLElement, bigTitle: string) {
    this.selectedGuidelinePanel = bigTitle;
    el.scrollIntoView({ behavior: 'smooth' });
    this.currentSection = el;
  }


  public moveToSection(increment: number, allSections: HTMLElement[], titles: string[]) {
    if (!this.currentSection) {
      this.scrollToSection(allSections[1], this.bigTitles.experiences);
      return;
    }
    const index = allSections.findIndex(el => el === this.currentSection) + increment;
    this.scrollToSection(allSections[index], titles[index]);

    if (index === 0) {
      this.currentSection = undefined;
    }
  }


  public isMoveToSectionDisabled(increment: number, allSections: HTMLElement[]): boolean {
    if (!this.currentSection && increment < 0) {
      return true;
    }

    if (this.currentSection && increment < 0 && allSections.findIndex(el => el === this.currentSection) === 0) {
      return true;
    }

    if (this.currentSection && increment > 0 && allSections.findIndex(el => el === this.currentSection) === allSections.length - 1) {
      return true;
    }

    return false;
  }

}
