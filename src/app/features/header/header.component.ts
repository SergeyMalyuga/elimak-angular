import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ToggleDirective} from '../../shared/directives/toggle.directive';

@Component({
  selector: 'app-header',
  imports: [
    ToggleDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isNavOpen = signal<boolean>(false);
  public isSocialOpen = signal<boolean>(false);

  public toggleNav() {
    this.isNavOpen.set(!this.isNavOpen());
  }

  public toggleSocial() {
    this.isSocialOpen.set(!this.isSocialOpen());
  }
}
