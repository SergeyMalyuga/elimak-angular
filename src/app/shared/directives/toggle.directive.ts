import {Directive, EventEmitter, HostListener, inject, Output} from '@angular/core';
import {SocialMenuService} from '../../core/services/social-menu.service';

@Directive({
  selector: '[appToggle]',
})
export class ToggleDirective {
  @Output() toggled = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.toggled.emit();
  }
}
