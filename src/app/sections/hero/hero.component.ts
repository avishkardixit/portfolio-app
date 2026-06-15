import { Component } from '@angular/core';
import { LeftSocialComponent } from "../../layout/left-social/left-social.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LeftSocialComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Change this to your resume file name
    link.download = 'Resume.pdf';
    link.click();
  }
}
