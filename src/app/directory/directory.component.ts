import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  profiles: any[];

  constructor() { }

  ngOnInit() {
    this.profiles = [
      {
        name: 'Brooke Wittenberg',
        cohort: 'Cohort 21',
        image: 'brooke.gif',
        skills: ['HTML', 'CSS', 'SCSS', 'JS', 'JQuery'],
        contact: 'brooke.wittenberg@gmail.com',
        bio: 'I am a current student eagerly absorbing all of the material heaped upon me.'
      },
      {
        name: 'Ben Wilburn',
        cohort: 'Cohort 13',
        image: 'ben.jpg',
        skills: ['HTML', 'CSS', 'SCSS', 'JS', 'JQuery', 'React', 'All the things'],
        contact: 'bwilburnstrength@gmail.com',
        bio: 'I am a front end developer and I am awesome, obviously.'
      },
      {
        name: 'Brian Hiatt',
        cohort: 'Cohort 6',
        image: 'brian.jpg',
        skills: ['HTML', 'CSS', 'SCSS', 'JS', 'JQuery', 'Angular', 'Typescript', 'All the things'],
        contact: 'youcantry@gmail.com',
        bio: 'I am the greatest leader of all time.'
      },
      {
        name: 'Jordan Dhaenens',
        cohort: 'Cohort 19',
        image: 'jordan.png',
        skills: ['HTML', 'CSS', 'SCSS', 'JS', 'JQuery', 'Angular', 'And Stuff'],
        contact: 'dapperdan@gmail.com',
        bio: 'I love NSS, kefir, facial hair, and long strolls while wearing suspenders.'
      },
      {
        name: 'Joshua Meyers',
        cohort: 'Cohort 20',
        image: 'josh.jpg',
        skills: ['HTML', 'CSS', 'SCSS', 'JS', 'JQuery', 'Angular', 'And Stuff'],
        contact: 'keepinitcool@gmail.com',
        bio: 'I love NSS, kefir, facial hair, and long strolls while wearing suspenders.'
      },
    ];
  }

}
