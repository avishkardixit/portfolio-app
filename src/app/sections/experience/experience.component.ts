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

  experiences = [
    {
      company: 'Accenture',
      roles: [
        {
          title: 'Software Associate',
          time: 'Feb 7, 2025 – Feb 28, 2026',
          points: [
            'Built scalable enterprise applications using Angular and .NET',
            'Worked on complex UI logic, reusable components, and third-party integrations',
            'Contributed to micro frontend architecture and modular app structure',
            'Used Git, GitHub, Azure DevOps for version control and collaboration'
          ]
        },
        {
          title: 'Software Analyst',
          time: 'Mar 1, 2026 – Present',
          points: [
            'Led development of shared components to reduce rework across teams',
            'Worked on performance optimization and maintainable architecture',
            'Handled deployment, domain management, SSL, HTTPS and hosting',
            'Worked with Azure Cloud (AZ-900 & AZ-204 certified)'
          ]
        }
      ]
    },
    {
      company: 'GlobalStep Pvt. Ltd.',
      roles: [
        {
          title: 'Test Engineer',
          time: '6 Months',
          points: [
            'Performed Manual, Regression, Ad-hoc and Functional testing',
            'Created and executed test cases for real client products',
            'Reported and tracked bugs using JIRA',
            'Collaborated with clients and developers to improve product quality',
            'Gained strong understanding of SDLC and QA processes'
          ]
        }
      ]
    }
  ];
}
