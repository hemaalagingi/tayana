import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-layout',
  templateUrl: './loader-layout.component.html',
  styleUrls: ['./loader-layout.component.css']
})
export class LoaderLayoutComponent implements OnInit {
  @Input()  canDisplaySpinner= false;
  constructor() { }

  ngOnInit() {
  }

}
