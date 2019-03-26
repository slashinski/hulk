import { Component, Input } from '@angular/core';

@Component({
  selector: 'hulk-split-layout',
  templateUrl: './split-layout.component.html',
  styleUrls: ['./split-layout.component.scss']
})
export class SplitLayoutComponent {

  @Input() mainFlex = '100%';
  @Input() mainLayoutAlign = 'start';
  @Input() leftFlex = '50%';
  @Input() rightFlex = '50%';
  @Input() leftAlign: string;
  @Input() rightAlign: string;
  @Input() titleMarginTop: string;

}
