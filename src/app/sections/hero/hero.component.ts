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

}
