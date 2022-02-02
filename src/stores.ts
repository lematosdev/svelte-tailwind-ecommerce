import { writable, derived } from 'svelte/store';
import type { Product, CartItem } from './types';

export const search = writable('');
export const products = writable<Product[]>([]);
export const cart = writable<CartItem[]>([]);
export const toggleDropdown = writable(false);

export const totalAmount = derived(cart, ($cart) => {
  return (
    Math.round(
      $cart.reduce((acc, item) => acc + item.total, 0) * 100
    ) / 100
  );
});

export const filteredProducts = derived(
  [products, search],
  ([$products, $search]) => {
    return $products.filter((product) =>
      product.title
        .toLowerCase()
        .includes($search.toLowerCase())
    );
  }
);
