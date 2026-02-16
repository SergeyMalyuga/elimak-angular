import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeroComponent} from '../../features/hero/hero.component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
