import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeroComponent} from '../../features/hero/hero.component';
import {HeaderComponent} from '../../features/header/header.component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    HeaderComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
