<script>
  import { onMount } from 'svelte';

  let comments = [];

  async function fetchComments() {
    const response = await fetch('https://6662589a62966e20ef0850d8.mockapi.io/Comments');
    const data = await response.json();
    comments = data;
  }

  onMount(() => {
    fetchComments();
  });
</script>

<style>
  .comment-container {
    max-width: 90%;
    margin: 20px auto;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .comment {
    margin-bottom: 10px;
    padding: 10px;
    background: rgb(0, 0, 0);
    border-left: 5px solid #007BFF;
    border-radius: 5px;
  }
  .title {
    padding: 5px;
  }
  .content {
    margin-bottom: 10px;
    padding-left: 10px;
  }

  .icon {
    display: flex;
    align-items: center;
  }
</style>

<div class="comment-container">
  {#each comments as comment}
    <div class="comment">
      <div class="title">{comment.title}</div>
      <div class="content row flex">
        <div class="icon">
          <svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
          </svg>
        </div>
        {comment.content}
      </div>
    </div>
  {/each}
</div>
