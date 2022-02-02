<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Product } from '../types';
  import { cart } from '../stores';
  export let product: Product;

  const handleAddToCart = (): void => {
    cart.update((p) => {
      if (p.find((item) => item.id === product.id)) {
        return p.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + item.price
            };
          }
          return item;
        });
      }
      return [
        ...p,
        { ...product, quantity: 1, total: product.price }
      ];
    });
  };
</script>

<div
  transition:fade|local
  class="border-indigo-500 border-4 rounded-lg flex flex-col m-2"
>
  <p
    class="bg-indigo-500 text-white text-left font-bold uppercase w-full max-w-full truncate px-2"
  >
    {product.title}
  </p>
  <div class="p-2">
    <div class="w-full flex justify-center">
      <img src={product.image} alt="gatito" class="h-36" />
    </div>
    <div>
      <p
        class="h-32 text-lg text-left text-ellipsis overflow-auto relative"
      >
        {product.description}
      </p>
      <div class="flex mt-2 justify-between">
        <div class="text-md mt-1">
          {product.category}
        </div>
        <div class="flex">
          <div
            class="text-lg text-right mt-1 mr-1 font-bold"
          >
            ${product.price}
          </div>
          <button
            on:click={handleAddToCart}
            class="bg-indigo-500 rounded-full flex items-center h-8 hover:bg-indigo-700"
          >
            <span
              class="flex items-center justify-center pt-1 rounded-full w-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
            </span>
            <p
              class="text-sm pr-4 py-1 font-bold text-white border-none"
            >
              ADD
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
