import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    technologies = {
        frontEnd: [
            "Html",
            "Javascript",
            "Typescript",
            "CSS",
            "Bootstrap",
            "Materialize",
            "SCSS",
            "AngularJS",
            "Angular",
            "ReactJS",
            "BackboneJS",
            "Handlebars"
        ],
        backEnd: [
            "C",
            "C++",
            "C#",
            ".NET",
            "Python",
            "Django",
            "DjangoREST",
            "Ruby",
            "RubyOnRails",
            "Elixr",
            "PHP",
            "Java",
            "NodeJS",
            "R",
            "F#"
        ],
        mobile: [
            "Swift",
            "ReactNative",
            "Ionic",
        ],
        terminal: [
            "npm",
            "bower",
            "webpack",
            "yarn",
            "yeoman",
            "bash",
            "install scripts",
            "vim",
            "zsh",
            "prezto"
        ]
    }


    constructor() { }

    ngOnInit() {
    }

}
