import {Injectable, OnDestroy, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResolutionService implements OnDestroy {
  public resolution = signal<number>(window.innerWidth);
  private resolutionHandler = () => this.resolution.set(window.innerWidth);

  constructor() {
    window.addEventListener('resize', this.resolutionHandler)
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resolutionHandler)
  }
}

