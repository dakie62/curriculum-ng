import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences = [] = [{
    title: 'Fullstack Developer at Adeo ',
    duration: '1 Year',
    body: 'The SPICE project\'s goal is to help the commercial exchanges among enterprises and to respond to various strategic challenges.',
    photo: '../../assets/pro/groupe-adeo-office.jpg'
  },
  {
    title: 'FullStack Developer at Kiabi',
    duration: '1 Year',
    body: 'Within the MAP team, we built a platform letting the workers create new brand collections internationally, thus facilitating the work.',
    photo: '../../assets/pro/kiabi.jpg',
  },
  {
    title: 'FullStack Developer at Kiabi',
    duration: '1 Year',
    body: 'During my experience in OMS supply team, our effort focused on new screens and REST APIs, whose jobs were to manage the orders between clients and suppliers.',
    photo: '../../assets/pro/kiabi.jpg',
  }, {
    title: 'Fullstack Developer at Boulanger',
    duration: '1 Year',
    body: 'Contribution to digitization of BDOM and participation of its system migration, which is a subsidiary company of Boulanger recognized in the world of home service.',
    photo: '../../assets/pro/boulanger.jpg',
  }];

}
