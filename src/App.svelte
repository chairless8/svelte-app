<script>
  import Router, {push} from 'svelte-spa-router';
  import MainLayout from './layouts/MainLayout.svelte';
  import Navbar from './components/Navbar.svelte';
  // Route components
  import Home from './components/Home.svelte';
  import SearchComponent from './components/Search.svelte';
  import CommentList from './components/CommentList.svelte';
  import ContactForm from './components/ContactForm.svelte';
  import NotFound from './components/NotFound.svelte';

  const routes = {
    '/': Home,
    '/search': SearchComponent,
    '/comments': CommentList,
    '/formTest': ContactForm,
    '*': NotFound
  };
</script>

<Navbar />
<MainLayout>
  <Router {routes} />
</MainLayout>
<footer>
  <p>© 2024 Jesen Mi Aplicación</p>
</footer>

<style>
  .button-link {
    display: inline-block;
    padding: 10px;
    background-color: #ffffff;
    border: solid 1px #000000;
    text-decoration: none;
    color: black;
    text-align: center;
    width: 25%;
    box-sizing: border-box;
    border-radius: 15px;
  }
</style>