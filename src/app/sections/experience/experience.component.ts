import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  selected = 0;

  jobs = [
    {
      company: 'Accenture',
      role: 'Full Stack Developer',
      time: '2023 - Present',
      points: ['Angular UI', 'Kendo UI', '.NET APIs']
    },
    {
      company: 'Internship',
      role: 'Frontend Intern',
      time: '2022',
      points: ['HTML', 'CSS', 'Angular basics']
    }
  ];
}
