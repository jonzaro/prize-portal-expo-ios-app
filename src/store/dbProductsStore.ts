import create from 'zustand';
import axios from 'axios';
import { ProductType } from '../utils/types';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   wasPrice?: number;
//   rating: number;
//   brand: string;
//   category: string;
//   image: string;
// }

interface DbProductsStore {
  products: ProductType[];

  fetchProducts: () => Promise<void>;
}

export const useDbProductsStore = create<DbProductsStore>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const response = await axios.get<ProductType[]>(
        'mongodb+srv://Cluster57137:prizePortalPassword@cluster57137.jisgoli.mongodb.net/'
      );
      set({ products: response.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
}));
