import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
active = 'hero';

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        this.active = id;
      }
    }
  }
}
