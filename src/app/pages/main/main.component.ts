import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { HeaderComponent } from '../../features/header/header.component';
import { AboutComponent } from '../../features/about/about.component';
import {ProjectsComponent} from '../../features/projects/projects.component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent, HeaderComponent, AboutComponent, ProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
