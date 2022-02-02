<script lang="ts">
  import { fly } from 'svelte/transition';
  import { cart, toggleDropdown } from '../stores';
  const total =
    Math.round(
      ($cart.reduce((acc, cur) => acc + cur.total, 0) +
        Number.EPSILON) *
        100
    ) / 100;

  const clearCart = () => {
    cart.set([]);
    toggleDropdown.set(false);
  };
</script>

{#if $toggleDropdown}
  <div
    transition:fly
    class="absolute bg-white right-2 w-52 p-2 z-50 overflow-y-auto max-h-52 rounded-lg shadow-lg"
  >
    {#each $cart as cartItem}
      <div
        class="border-b-indigo-700 border-b-2 flex mb-3 py-1"
      >
        <h1 class="truncate">{cartItem.title}</h1>
        <p
          class="border-2 border-gray-300 rounded-xl text-center w-14"
        >
          {cartItem.quantity}
        </p>
      </div>
    {/each}
    <div class="flex justify-between">
      <button class="bottom-0" on:click={clearCart}
        >Clear Cart</button
      >
      <p>
        Total: ${total}
      </p>
    </div>
  </div>
{/if}
