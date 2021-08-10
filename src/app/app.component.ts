import { Component } from '@angular/core';
import { faCat, faChevronRight, faHandshake, faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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


  scrollToSection(el: HTMLElement, bigTitle: string) {
    this.selectedGuidelinePanel = bigTitle;
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
