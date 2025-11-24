import  { create } from 'zustand';
import { persist, combine } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Product } from '../lib/types';

export const useProductStore = create(combine(
  {
    products: [] as Product[],
    filteredProducts: [] as Product[],
    setFilteredProducts: (products: Product[], maxPrice: number, raiting: number) => {},
  },
  immer((set) => ({
    products: [],
    filteredProducts: [],
    setFilteredProducts: (products: Product[], maxPrice: number, raiting: number) => set((state) => {
      state.filteredProducts = products.filter((product) => product.price <= maxPrice || product.raiting <= raiting);
    }),
  }),
)));
