import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-download-license',
  templateUrl: './download-license.component.html',
  styleUrls: ['./download-license.component.css']
})
export class DownloadLicenseComponent implements OnInit {
  customers : Customer[];
  constructor() { }

  ngOnInit() {
  }

  downloadLicense() {
    
  }

}
