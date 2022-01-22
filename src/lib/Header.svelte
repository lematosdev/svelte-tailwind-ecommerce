<script lang="ts">
  import { search } from '../stores';
  let val = '';
  search.set(val);
</script>

<nav class="bg-indigo-500 py-2 md:py-4">
  <div class="flex flex-row justify-between">
    <div class="container flex flex-row">
      <h1
        class="font-bold text-xl text-white pl-3 pr-6 whitespace-nowrap flex items-center"
      >
        SIMPLE eCommerce
      </h1>

      <div class="flex relative items-stretch">
        <span
          class="z-10 h-full absolute flex items-center justify-center w-10 py-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg></span
        >
        <input
          type="text"
          placeholder="Buscar"
          class="px-3 py-3 relative rounded-lg border-0 pl-10"
          bind:value={val}
        />
      </div>
    </div>
    <div class="flex flex-row items-center">
      <h1 class="text-xl px-2 text-white">CART</h1>
    </div>
  </div>
</nav>
