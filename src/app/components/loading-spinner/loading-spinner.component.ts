import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ygr-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input('is-loading') isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
