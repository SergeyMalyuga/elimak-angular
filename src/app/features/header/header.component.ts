import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import { ToggleDirective } from '../../shared/directives/toggle.directive';
import {HeaderOnScrollDirective} from './directives/header-on-scroll.directive';
import {SocialMenuService} from '../../core/services/social-menu.service';
import {ResolutionService} from '../../core/services/resolution.service';
import {Resolution} from '../../core/constants/const';
import {NavigationService} from '../../core/services/navigation.service';

@Component({
  selector: 'app-header',
  imports: [ToggleDirective, HeaderOnScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public socialService = inject(SocialMenuService);
  public resolutionService = inject(ResolutionService);
  public navigationService = inject(NavigationService);

  public toggleNav() {
    this.navigationService.toggle();
    if (this.resolutionService.resolution() <= Resolution.MOBILE) {
      this.socialService.toggle();
    }
  }

  public toggleSocial() {
    this.socialService.toggle();
  }
}
