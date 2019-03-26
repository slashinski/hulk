import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

const ENTER_KEY_CODE = 13;

@Directive({ selector: '[fastClick]' })
export class FastClickDirective implements OnChanges {
  private touchStartPoint: Touch;

  @Input() tabindex: Number = 0;

  @Output() onFastClick = new EventEmitter<MouseEvent | TouchEvent | KeyboardEvent>();

  constructor(private el: ElementRef) {
    if (el.nativeElement) {
      el.nativeElement.tabIndex = this.tabindex;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tabindex && changes.tabindex.currentValue !== changes.tabindex.previousValue) {
      if (this.el.nativeElement) {
        this.el.nativeElement.tabIndex = this.tabindex;
      }
    }
  }

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    this.onFastClick.emit(e);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(e) {
    this.touchStartPoint = e.touches[0];
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(e) {
    const touchEndPoint = e.changedTouches[0];
    const touchStartPoint = this.touchStartPoint;
    this.touchStartPoint = null;

    if (this.calculateTouchDistance(touchStartPoint, touchEndPoint) > 20) {
      return;
    }

    e.preventDefault();
    this.onFastClick.emit(e);
  }

  @HostListener('keyup', ['$event'])
  onEnterKeyDown(e: KeyboardEvent) {
    if (e.which === ENTER_KEY_CODE || e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      this.onFastClick.emit(e);
    }
  }

  private calculateTouchDistance(start: Touch, end: Touch): number {
    return ((end.pageX - start.pageX) ** 2 + (end.pageY - start.pageY) ** 2) ** 0.5;
  }
}
