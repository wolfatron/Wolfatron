import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WolfatronTitleComponent } from 'src/app/components/wolfatron-title/wolfatron-title.component';
 
@Component({
  selector: 'app-landing-view',
  standalone: true,
  imports: [CommonModule,WolfatronTitleComponent],
  templateUrl: './landing-view.component.html',
  styleUrl: './landing-view.component.scss',
})
export class LandingViewComponent {}
