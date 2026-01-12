import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { LeftSocialComponent } from "./layout/left-social/left-social.component";
import { RightEmailComponent } from "./layout/right-email/right-email.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { AboutComponent } from "./sections/about/about.component";
import { ExperienceComponent } from "./sections/experience/experience.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LeftSocialComponent, RightEmailComponent, HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
