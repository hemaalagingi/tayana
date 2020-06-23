import { Product } from './product.model';

export class ProductFeature {
    id: number;
    ProductId: number;
    featureName: string;
    active: boolean;
    product: Product
}