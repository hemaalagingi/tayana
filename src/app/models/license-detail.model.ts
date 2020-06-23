import { Customer } from './customer.model';

export class LicenseDetail {
    id: number;
    productLicenseKeyId:number;
    licenseExpireDay: number
    licenseExpireMonth:number;
    licenseExpireYear:number;
    licenseToCustomerId: number;
    licenseExpireMinutes:number;
    licenseExpireDate:Date;
    licenseCreateDate: Date;
    customer: Customer;
   // productLicenseKey: PRoductLicenseKey;
}