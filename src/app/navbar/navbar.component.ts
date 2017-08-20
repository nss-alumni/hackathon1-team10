import { Observable } from 'rxjs/Rx';
import { assertNotNull } from '@angular/compiler/src/output/output_ast';
import { AuthService } from '../auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @Input() isAuthenticated: Observable<boolean>;
    

  constructor(public authService: AuthService) { }

    ngOnInit() {
    }

}
