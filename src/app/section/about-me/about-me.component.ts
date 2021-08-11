import { Component, OnInit } from '@angular/core';
import { faCat, faChevronRight, faHandshake, faLaptop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public whoAmI = "Me, myself and I";
  public icons = {
    cat: faCat,
    chevron_right: faChevronRight,
    hand_shake: faHandshake,
    laptop: faLaptop
  }

  public hyperlinks: Hyperlink[] = [
    { name: 'Github', webUrl: 'https://github.com/dakie62', image: '../assets/git.svg.png' },
    { name: 'Linkedin', webUrl: 'https://www.linkedin.com/in/alexis-e-673204130/', image: '../assets/linkedin.png' },
    { name: 'Kaleo-IT', webUrl: 'https://www.societe.com/societe/kaleo-it-882321227.html', image: '../assets/infogreffe.png' },
    { name: 'Facebook', webUrl: 'https://www.facebook.com/alexis.ebrard/', image: '../assets/facebook.png' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateToHyperlink(link: Hyperlink) {
    window.open(link.webUrl, "_blank");
  }

}

interface Hyperlink {
  name: string;
  webUrl: string;
  image?: string;
}