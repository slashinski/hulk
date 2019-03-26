import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
/*
Potential roadmap:
- Enable acting as a 'controlled comonent'
  (open / closed is entirely determined by parent via Input)

- Allow leaving 'uncontrolled', but provide an optional
  'initial state' prop for starting as opened / closed

- Add props for further styling, either by
  direct application of classes, or pre-defining
  sub-types / themes with built-in styles for each
*/
@Component({
  selector: 'hulk-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  animations: [
    trigger('openState', [
      state('expanded', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate('250ms ease-in-out', style({ height: 0 }))
      ]),
      transition('void => *', [
        style({ height: 0 }),
        animate('250ms ease-in-out', style({ height: '*' }))
      ])
    ])
  ]
})
export class AccordionComponent {
  @Input() icon?: AccordionIcon;
  @Input() title: string;
  @Input() titleClass = 'h5';
  @Input() arrowClass = 'bpf-arrow';
  @Input() lockMessage: string;
  @Input() isOpen = false;
  @Input() progress: string;
  @Output() onTitleClicked: EventEmitter<void> = new EventEmitter();
  @Input() titleMarginTop: string;

  toggleOpen() {
    if (!this.lockMessage) {
      this.isOpen = !this.isOpen;
      this.onTitleClicked.emit();
    }
  }
}

export class AccordionIcon {
  color: string;
  name: string;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
}
