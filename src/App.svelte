<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './lib/Header.svelte';
  import Card from './lib/Card.svelte';
  import Spinner from './lib/Spinner.svelte';
  import { products, filteredProducts } from './stores';
  let loading = true;
  onMount(async () => {
    const res = await fetch(
      'https://fakestoreapi.com/products'
    );
    const data = await res.json();
    $products = data;
    loading = false;
  });
</script>

<div>
  <Header />
  <main>
    {#if loading}
      <Spinner />
    {:else}
      <div
        class="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1"
      >
        {#each $filteredProducts as product}
          <Card {product} />
        {/each}
      </div>
    {/if}
  </main>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
