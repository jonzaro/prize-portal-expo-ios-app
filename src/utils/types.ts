// export interface Product {
//     sku: number;
//     name: string;
//     type: string;
//     price: number;
//     upc: string;
//     category: ProductCategory[];
//     shipping: number | string;
//     description: string;
//     manufacturer: string;
//     model: string;
//     url: string;
//     image: string;
//   }

//   export interface ProductCategory {
//     id: string;
//     name: string;
//   }

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  wasPrice: number;
  rating: number;
  brand: string;
  category: string;
  image: string;
  // images: ProductImages[];
}

export type PromoCoupon = {
  promotionText: string;
  promotionDescription: string;
  brandImage: number;
};

// export interface ProductImages {
//     url: string;
// }
