import { Component, OnInit } from '@angular/core';
import { icons } from 'src/app/fa-images';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor() { }

  icons = icons;
  technologies = ["Oracle", "Mongo DB", "MongoCloud", "Spring", "Tailwind", "Sonarqube", "Docker", "Typescript", "Swift", "Junit", "Jacoco", "Selenium", "Karma/Jasmine", "Windows", "Linux", "Intellij", "Visual Studio Code", "Jenkins", "Gitlab", "Gitlab-CI", "Git bash", "HTML5", "CSS3", "Javascript", "JAVA"];
  ngOnInit(): void {
  }



  public generateStars = (numberOfstars: number) => {
    let res = [];
    for (let i = 0; i < numberOfstars; i++) {
      res.push(i);
    }
    return res;
  }


}

