import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hulk-title-header',
  templateUrl: './title-header.component.html',
  styleUrls: ['./title-header.component.scss']
})
export class TitleHeaderComponent implements OnInit {

  @Input() titleTranslationKey: string;
  @Input() title: string;
  @Input() altStyle: boolean;

  ngOnInit() {}

}
