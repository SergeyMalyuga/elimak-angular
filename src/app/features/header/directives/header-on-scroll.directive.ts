import {Directive, HostBinding, HostListener} from '@angular/core';
import {HEADER_BG_SCROLL_OFFSET} from '../../../core/constants/const';

@Directive({
  selector: '[appHeaderOnScroll]'
})
export class HeaderOnScrollDirective {

  @HostBinding('class.header-dark')
  isDark = false;

  @HostListener('window:scroll')
  onScroll() {
    if(window.scrollY > HEADER_BG_SCROLL_OFFSET) {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  }
}
