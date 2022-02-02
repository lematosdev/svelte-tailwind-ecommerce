<script lang="ts">
  import { cart, toggleDropdown } from '../stores';
</script>

{#if $toggleDropdown}
  <div class="absolute bg-white right-7 w-52 p-2 z-50 overflow-y-auto max-h-52">
    {#each $cart as cartItem}
      <div class="border-2 border-indigo-500 flex mb-3">
        <h1 class="truncate">{cartItem.title}</h1>
        <p>${cartItem.price}</p>
      </div>
    {/each}
    <button class="absolute bottom-0">Clear Cart</button>
  </div>
{/if}
