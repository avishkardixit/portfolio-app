import { Component } from '@angular/core';

@Component({
  selector: 'app-left-social',
  standalone: true,
  imports: [],
  templateUrl: './left-social.component.html',
  styleUrl: './left-social.component.scss'
})
export class LeftSocialComponent {

  public githubLink = 'https://github.com/avishkardixit';
  public linkedinLink = 'https://linkedin.com/in/avishkardixit';
  public instagramLink = 'https://instagram.com/avishkar.dixit';

}
