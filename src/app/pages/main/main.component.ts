import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { HeaderComponent } from '../../features/header/header.component';
import { AboutComponent } from '../../features/about/about.component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent, HeaderComponent, AboutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
