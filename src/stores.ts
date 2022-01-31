import { writable, derived } from 'svelte/store';
import type { Product } from './types';

export const search = writable('');
export const products = writable<Product[]>([]);
export const cart = writable<Product[]>([]);

export const filteredProducts = derived(
  [products, search],
  ([$products, $search]) => {
    return $products.filter((product) =>
      product.title.toLowerCase().includes($search.toLowerCase())
    );
  }
);
