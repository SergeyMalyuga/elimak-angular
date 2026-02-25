import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { HeaderComponent } from '../../features/header/header.component';
import { AboutComponent } from '../../features/about/about.component';
import { DirectionsComponent } from '../../features/directions/directions.component';
import { FooterComponent } from '../../features/footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    DirectionsComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
