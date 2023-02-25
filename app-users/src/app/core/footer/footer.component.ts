import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  @Input() iconCustomer: string = '';
  @Input() iconProfile: string = '';
  @Input() iconSetting: string = '';

  @Input() labelCustomer: string = '';
  @Input() labelProfile: string = '';
  @Input() labelSetting: string = '';

  @Input() tabsList: any[] = [];
  constructor(

  ) {}

  ngOnInit() {
  }


}
