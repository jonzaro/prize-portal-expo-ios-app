

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

  
export interface ProductNew {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  // images: ProductImages[];
  }


// export interface ProductImages {
//     url: string;
// }