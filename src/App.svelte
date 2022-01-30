<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './lib/Header.svelte';
  import Card from './lib/Card.svelte';
  import { products, filteredProducts } from './stores';

  onMount(async () => {
    const res = await fetch(
      'http://fakestoreapi.com/products'
    );
    const data = await res.json();
    $products = data;
  });
</script>

<div>
  <Header />
  <main>
    <div class="grid md:grid-cols-3 sm:grid-cols-2">
      {#each $filteredProducts as product}
        <Card {product} />
      {/each}
    </div>
    <p>
      Visit the <a href="https://svelte.dev/tutorial"
        >Svelte tutorial</a
      > to learn how to build Svelte apps.
    </p>
  </main>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
