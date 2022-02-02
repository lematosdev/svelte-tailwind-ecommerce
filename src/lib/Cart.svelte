<script lang="ts">
  import { scale } from 'svelte/transition';
  import {
    cart,
    toggleDropdown,
    totalAmount
  } from '../stores';

  const clearCart = () => {
    cart.set([]);
    toggleDropdown.set(false);
  };
</script>

{#if $toggleDropdown}
  <div
    transition:scale
    class="absolute bg-white right-2 w-72 sm:w-96 py-3 px-5 z-50 rounded-lg shadow-lg"
  >
    <div class="overflow-y-auto max-h-52">
      {#each $cart as cartItem}
        <div
          class="border-b-indigo-700 border-b-2 flex justify-between mb-3 py-1"
        >
          <h1 class="truncate">{cartItem.title}</h1>
          <p
            class="border-2 border-gray-300 rounded-xl text-center min-w-[12%]"
          >
            {cartItem.quantity}
          </p>
        </div>
      {/each}
    </div>

    <div class="flex justify-between items-center">
      <button
        class="bg-indigo-500 rounded-full flex items-center hover:bg-indigo-700 text-white text-sm font-bold p-2"
        on:click={clearCart}>CLEAR CART</button
      >
      <p>
        Total: ${$totalAmount}
      </p>
    </div>
  </div>
{/if}
