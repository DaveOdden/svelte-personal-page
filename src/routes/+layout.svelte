
<script>
  import "$styles/app.css";
  import Logo from '$components/Logo.svelte';

</script>

<main>
  <div class="fixed-page-elements">
    <Logo />
  </div>
  <div id="fullpage">
    <slot />  
  </div>
</main>