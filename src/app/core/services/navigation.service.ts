import {Injectable, OnDestroy, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnDestroy {
  public isOpen = signal<boolean>(false);

  private resizeHandler = () => this.isOpen.set(false);

  constructor() {
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  public toggle() {
    this.isOpen.set(!this.isOpen());
  }
}
