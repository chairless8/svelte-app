<script>
    import { push } from 'svelte-spa-router';

    function navigateTo(path) {
      push(path);
    }
  </script>

  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Svelte - Jesen Demo</span>
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <button class="text-gray-900 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium" on:click={() => navigateTo('/')}>Home</button>
          </li>
          <li>
            <button class="text-gray-900 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium" on:click={() => navigateTo('/search')}>Search</button>
          </li>
          <li>
            <button class="text-gray-900 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium" on:click={() => navigateTo('/comments')}>User List</button>
          </li>
          <li>
            <button class="text-gray-900 hover:text-blue-700 dark:text-white px-3 py-2 rounded-md text-sm font-medium" on:click={() => navigateTo('/formTest')}>Form Test</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
