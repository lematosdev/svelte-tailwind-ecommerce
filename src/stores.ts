import { writable, derived } from 'svelte/store';
import type { Product } from './types';

export const search = writable('');

export const getProducts = () => {
  const { subscribe, set, update } = writable<Product[]>(
    []
  );

  return {
    subscribe,
    init: async () => {
      const res = await fetch(
        'http://fakestoreapi.com/products'
      ).then((res) => res.json());
      set(res);
      return res;
    },
    filter: () => {
      
    }
  };
};

export const products = getProducts();
