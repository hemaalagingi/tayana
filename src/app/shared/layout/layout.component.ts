import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoaderService } from '../services/loader.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  displayLoader = false
  canShowMenu = true;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private loaderService: LoaderService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.loaderService.isDisplayed.subscribe((display: boolean) => {
      this.displayLoader = display;
    });
  }

  shouldRun = true;
  licenceClicked = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  items = [
    { name: 'Home', subItems: null, path: '' },
    {
      name: 'License', path: null, subItems: [
        { name: 'License Key', subItems: null, path: '/license-key' },
        { name: 'License Generation', subItems: null, path: '/license-generation' },
        { name: 'License Download', subItems: null, path: '/license-download' }
      ]
    },
    { name: 'Product Features', subItems: null, path: '/product-features' },
    { name: 'Product', subItems: null, path: '/product' },
    { name: 'Customers', subItems: null, path: '/customers' }
  ];

  canShowExpand(item): void {
    if (item.subItems != null) {
      this.licenceClicked = !this.licenceClicked;
    }

    if (item.subItems == null && this.licenceClicked) {
      this.licenceClicked = false;
    }
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
