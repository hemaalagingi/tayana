import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadLicenseComponent } from './download-license.component';

describe('DownloadLicenseComponent', () => {
  let component: DownloadLicenseComponent;
  let fixture: ComponentFixture<DownloadLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
