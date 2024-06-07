<script>
  import { debounce } from 'lodash-es';

  let searchQuery = '';
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
  let filteredItems = [];

  function search(input) {
    filteredItems = items.filter(item => item.toLowerCase().includes(input.toLowerCase()));
  }
  // Debounce
  const debouncedSearch = debounce(search, 300);

  $: searchQuery, debouncedSearch(searchQuery);
</script>

<form class="max-w-md mx-auto p-4" on:submit|preventDefault>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21L15 15M17 10a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" bind:value={searchQuery} placeholder="Search Mockups, Logos..." required />
    </div>
    {#if searchQuery && filteredItems.length}
      <ul class="mt-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {#each filteredItems as item}
          <li class="p-3 hover:bg-gray-100 dark:hover:bg-gray-600">{item}</li>
        {/each}
      </ul>
    {:else if searchQuery}
      <p class="mt-4 p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white">No results found</p>
    {/if}
</form>
