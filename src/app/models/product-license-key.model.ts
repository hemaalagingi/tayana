import { LicenseDetail } from './license-detail.model';
import { Product } from './product.model';

export class ProductLicenseDetial {
    id: number;
    productId: number;
    privateKey: string;
    publicKey: string;
    licenseDetails: LicenseDetail[];
    product: Product;
}
