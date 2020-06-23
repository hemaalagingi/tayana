import { ProductFeature } from './product-feature.model';

export class Product {
    id: number;
    productCode: string;
    productDescription: string;
    active: boolean;
    productFeatures: ProductFeature[];
    productLicenseKeys: any[];
}