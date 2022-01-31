<script lang="ts">
  import { search, cart } from '../stores';
</script>

<nav class="bg-indigo-500 py-2 md:py-4">
  <div class="flex justify-between items-center">
    <div class="flex items-center">
      <h1
        class="font-bold text-xl text-white pl-3 pr-6 whitespace-nowrap flex items-center w-auto hidden sm:block"
      >
        SIMPLE eCommerce
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 mx-4 sm:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>

      <div class="flex relative h-10">
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
          class="px-3 py-3 relative rounded-lg border-0 pl-10 w-full"
          bind:value={$search}
        />
      </div>
    </div>
    <div class="px-2 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <h1 class="text-xl pr-2 text-white">
        {$cart.length}
      </h1>
    </div>
  </div>
</nav>
