import { Component } from '@angular/core';
import { Link } from '../Models/link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  links: Link[] = [
    { title: "Home", url: '/' },
    { title: 'Projets', url: '#' },
    { title: 'Contact', url: '#' }
  ]
}
